import express from "express";
import {
  register,
  login,
  getProfile,
  logout,
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/register").get(register).post(register);
router.route("/login").get(login).post(login);
router.get("/profile", protect, getProfile);
router.post("/logout", logout);

export default router;
