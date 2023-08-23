import express, { RequestHandler, urlencoded } from "express";
import { config } from "dotenv";

const app = express();

config();

app.use(express.json());
app.use(urlencoded({ extended: true }));

// import all routes
import userRoute from "./routes/userRoutes";

app.use('/user', userRoute);

app.use((req, res): object => {
    return res.status(404).json({ success: false, message: "Incorrect URL! Please enter valid URL" });
});

export default app;