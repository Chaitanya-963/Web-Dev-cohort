import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js";
import cookieParser from "cookie-parser";

//Import all routes
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello!.....🫵🏻");
  console.log("I am running");
});

app.get("/Chaitanya", (req, res) => {
  res.send("Hello Chaitanya!........😎");
});

// Connect to db
db();

// USER ROUTES

app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
  console.log(`Port is listening on ${port}`);
});
