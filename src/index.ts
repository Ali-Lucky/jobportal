import express from "express";
import { config } from "dotenv";
import { connectToDatabase } from "./config/db";

config();
connectToDatabase();

const PORT = 4000;

const a = "500"

const app = express();

app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`);
});