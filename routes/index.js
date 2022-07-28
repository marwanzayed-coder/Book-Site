import express from "express";
import {
  get_user_details,
  authController,
} from "../controllers/userController.js";

export const userRouter = express.Router();

userRouter.post("/login-back", authController.login);

userRouter.post("/signup-back", authController.register);

userRouter.post("/new_book", authController.new_book);

userRouter.get("/user/:id", get_user_details);
