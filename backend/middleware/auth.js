import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not Authorized Login Again",
    });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decodedToken.id; // Set userId in request body
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    return res.status(401).json({ success: false, message: "Error" });
  }
};

export default authMiddleware;
