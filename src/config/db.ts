import mongoose, { ConnectOptions } from "mongoose";

export const connectToDatabase = () => {
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