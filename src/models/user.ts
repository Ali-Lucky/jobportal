import { Schema, model, Document } from "mongoose";

export interface User extends Document{
    fullname: string,
    email: string,
    password: string,
    role: string
};

const userSchema = new Schema<User>({
    fullname: {
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