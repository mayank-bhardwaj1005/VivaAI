import jwt from "jsonwebtoken";

const generateToken = async (userId) => {
  try {
    const payload = { id: userId };
    const secret = process.env.JWT_SECRET;

    const token = jwt.sign(payload, secret, { expiresIn: "7d" });
    return token;
  } catch (error) {
    console.error("Error generating token:", error);
    throw error; // rethrow for caller to handle
  }
};

export default generateToken;
