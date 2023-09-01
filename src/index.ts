import { config } from "dotenv";
import { connectToDatabase } from "./config/db";
import log from "./utils/logger";
import app from "./app";

config();
connectToDatabase();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    log.info(`Server is running at PORT: ${PORT}`);
});