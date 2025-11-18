import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  try {
    // Read Authorization header
    const authHeader = req.headers.authorization;
     console.log("👉 Auth Header Received:", authHeader);
    if (!authHeader) {
      return res.status(401).json({ success: false, message: "Not Authorized. Login again." });
    }

    // Extract token (remove 'Bearer ')
    const token = authHeader.replace("Bearer ", "");
    console.log("👉 Extracted Token:", token); // debug log

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("👉 Decoded Token:", decoded); // debug log

    if (!decoded.id) {
      return res.status(401).json({ success: false, message: "Invalid token. Login again." });
    }

    req.user = { id: decoded.id }; // Attach user id to req.user
    next();
  } catch (error) {
     console.log("❌ Auth error:", error.message);
    return res.status(401).json({ success: false, message: error.message });
  }
};

export default userAuth;
