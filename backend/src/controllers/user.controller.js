import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
  console.log("okay");
  const { username, email, password } = req.body;

  // Check if the username or email already exists in the database
  const existingUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "Username or email already exists" });
  }

  // Create a new user instance
  const newUser = new User({ username, email, password });

  try {
    // Save the user to the database
    const savedUser = await newUser.save();

    // Return a success response
    res
      .status(201)
      .json({ message: "User registered successfully", user: savedUser });
  } catch (error) {
    // Handle errors
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const LoginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // Compare the provided password with the stored hash
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // Generate JWT token
  const secretKey = "your_secret_key";
  const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: "1h" });

  // Return success response with token
  res.status(200).json({ message: "Login successful", token });
});

export { registerUser, LoginUser };
