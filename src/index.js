// require("dotenv").config();
// import connectDB from "./db";

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./",
});
/*
import mongoose from "mongoose";
import { DB_NAME } from "./constant";
import express from "express";
const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("error", error);
      throw error;
    });

    app.listen(process.env.PORT, () =>
      console.log(`app is listen on port ${process.env.PORT}`)
    );
  } catch (error) {
    console.error("ERROR", error);
    throw error;
  }
})();
*/
connectDB();
