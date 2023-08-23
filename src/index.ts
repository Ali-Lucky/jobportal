import { config } from "dotenv";
import { connectToDatabase } from "./config/db";
import app from "./app";

config();
connectToDatabase();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`);
});