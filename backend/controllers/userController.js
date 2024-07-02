import userModel from "./../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    //checking is user already exists
    const user = await userModel.findOne({ email });

    //if user not found
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "User not found",
      });
    }
    //checking password
    const isMatch = await bcrypt.compare(password, user.password);

    //if password is not matched
    if (!isMatch) {
      return res.status(400).send({
        success: false,
        message: "Invalid credentials",
      });
    }

    //creating token
    const token = createToken(user._id);
    res.status(200).send({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
    });
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//register user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    //checking is user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.status(400).send({
        success: false,
        message: "User already exists",
      });
    }
    //validating email & strong password
    if (!validator.isEmail(email)) {
      return res.status(400).send({
        success: false,
        message: "Please enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.status(400).send({
        success: false,
        message: "Please enter a strong password",
      });
    }
    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //creating new user
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });
    // save the user in database
    const user = await newUser.save();
    //creating token
    const token = createToken(user._id);
    res.status(201).send({
      success: true,
      message: "User registered successfully",
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registering user",
    });
  }
};

export { loginUser, registerUser };
