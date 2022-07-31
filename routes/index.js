import express from "express";
import {
  authController,
  get_user_details,
} from "../controllers/userController.js";

export const userRouter = express.Router();

userRouter.post("/login-back", authController.login);

userRouter.post("/signup-back", authController.register);

userRouter.post("/new_book", authController.new_book);

userRouter.get("/api/:id", get_user_details);
