import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};


const setTokenCookie = (res, token) => {
  const isProduction = process.env.NODE_ENV === "production";
  
  // LOG: Check if this function is called and what the environment is
  console.log(`[AUTH] Setting cookie. Production: ${isProduction}`);

  const cookieOptions = {
    httpOnly: true,
    secure: isProduction, 
    sameSite: isProduction ? "none" : "lax", 
    maxAge: 7 * 24 * 60 * 60 * 1000,
  };

  // LOG: Final check on options before sending
  console.log("[AUTH] Cookie Options:", cookieOptions);

  res.cookie("token", token, cookieOptions);
};

export const register = async (req, res, next) => {
  try {
    const payload = req.method === "GET" ? req.query : req.body;
    const { name, email, password } = payload;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and password are required.",
      });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase().trim() });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "A user with that email already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
    });

    const token = generateToken(user._id);
    setTokenCookie(res, token);

    res.status(201).json({
      success: true,
      message: "User registered successfully.",
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(`[LOGIN ATTEMPT] Email: ${email}`); // Add this

    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      console.log("[LOGIN FAIL] User not found"); // Add this
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.log("[LOGIN FAIL] Password mismatch"); // Add this
      return res.status(401).json({ message: "Invalid credentials." });
    }
    
    // ... rest of code


    const token = generateToken(user._id);
    setTokenCookie(res, token);

    res.json({
      success: true,
      message: "Login successful.",
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getProfile = async (req, res, next) => {
  try {
    res.json({
      success: true,
      data: {
        user: req.user,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      expires: new Date(0),
    });

    res.json({
      success: true,
      message: "Logged out successfully.",
    });
  } catch (error) {
    next(error);
  }
};
