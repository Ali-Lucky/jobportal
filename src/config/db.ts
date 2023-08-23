import mongoose, { ConnectOptions } from "mongoose";

export const connectToDatabase = () => {
    if (!process.env.DB_URI) {
        throw new Error("DB_URI not defined in environment variables");
    };
    
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions)
        .then(() => {
            console.log("Database Connected");
        })
        .catch((err) => {
            console.log(err);
        });
};