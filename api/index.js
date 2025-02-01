import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();
const app = express();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(4000, () => {
  console.log("server is running on port 4000");
});

app.get("/test", (req, res) => {
  res.send("Hello Dinah");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
