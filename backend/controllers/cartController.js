import userModel from "./../models/userModel.js";

// add to cart
const addToCart = async (req, res) => {
  try {
    const userId = req.body.userId; // Ensure userId is correctly set by authMiddleware
    const userData = await userModel.findById(userId);

    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {}; // Initialize cartData if it doesn't exist
    const itemId = req.body.itemId;

    if (!cartData[itemId]) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] += 1;
    }

    // Update user's cartData
    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      { cartData },
      { new: true }
    );

    res
      .status(200)
      .json({ success: true, message: "Added to cart", user: updatedUser });
  } catch (error) {
    console.error("Error adding to cart:", error.message);
    res.status(400).json({ success: false, message: "Error adding to cart" });
  }
};

// get cart
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.status(201).json({
      success: true,
      cartData,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Error",
    });
  }
};

// remove from cart
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.status(200).json({
      success: true,
      message: "Removed from cart",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Error",
    });
  }
};

export { addToCart, getCart, removeFromCart };
