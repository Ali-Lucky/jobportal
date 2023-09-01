import mongoose, { ConnectOptions } from "mongoose";
import log from "../utils/logger";

export const connectToDatabase = (): void => {
    if (!process.env.DB_URI) {
        throw new Error("DB_URI not defined in environment variables");
    };
    
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions)
        .then(() => {
            log.info("Database Connected");
        })
        .catch((err) => {
            console.log(err);
        });
};