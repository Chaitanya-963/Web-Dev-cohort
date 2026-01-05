import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();
// export a funtion that connect to db

const db =  () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((err) => {
      console.log("Error Connecting to mongodb");
    });
};

export default db;
