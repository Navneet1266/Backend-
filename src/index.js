 

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
});
const app = express();



;(async () => {
    try {
await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
app.on("error", (err) => {
    console.log("Error:", err);
    throw error   })
    app.listen(process.env.PORT, () => {
        console.log(`Example app listening on port ${process.env.PORT}`)
    })
} catch (error) {
        console.log("Error:", error);
        throw error
    }
})()