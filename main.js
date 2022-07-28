import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import { userRouter } from "./routes/index.js";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// Connect to db
mongoose
  .connect(process.env.MONGOOSE_URL)
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/", userRouter);

const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(`${__dirname}/client/build`));
  app.get("*", (req, res) =>
    res.sendFile(`${__dirname}/client/build/index.html`)
  );
}
