import { Schema, model } from "mongoose";

export interface User {
    username: string,
    email: string,
    password: string,
    role: string
};

const userSchema = new Schema<User>({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["recruiter", "jobseeker"]
    },
}, {timestamps:true});

export default model<User>('User', userSchema);