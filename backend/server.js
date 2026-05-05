import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cryptoRoutes from "./routes/cryptoRoutes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
app.use(cors({ 
  origin: process.env.NODE_ENV === "production" 
    ? "https://yusifibrahim-crypto-app.netlify.app" 
    : "http://localhost:5173", 
  credentials: true 
}));

app.use(express.json());
app.use(cookieParser());
app.use(cookieParser());

// LOG: Track all incoming requests and their cookies
app.use((req, res, next) => {
  console.log(`[DEBUG] ${req.method} ${req.url}`);
  console.log("[DEBUG] Cookies received:", req.cookies);
  next();
});


await connectDB();

app.get("/", (req, res) => {
  res.json({ success: true, message: "Coinbase clone backend is running." });
});

app.use("/api/auth", authRoutes);
app.use("/api/crypto", cryptoRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
