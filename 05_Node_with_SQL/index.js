import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

//custom route

import userRouter from "./routes/auth.route.js";

dotenv.config();
const port = process.env.PORT || 4000;
const app = express();

app.use(
  cors({
    origin: "http:/localhost:5173",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello!...😎");
});


app.use("/api/v1/users", userRouter);

app.listen(port, () => {
  console.log(`Backend is running on ${port}`);
});
