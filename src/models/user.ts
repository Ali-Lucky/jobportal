import { Severity, getModelForClass, modelOptions, pre, prop } from "@typegoose/typegoose";
import { hash } from "bcrypt";

@modelOptions({
    schemaOptions: {
        timestamps: true
    },
    options: {
        allowMixed: Severity.ALLOW
    }
})

@pre<User>("save", async function () {
    if (!this.isModified("password")) {
        return;
    }
    const hashedPassword = await hash(this.password, 10);
    this.password = hashedPassword;
    return;
})

export class User {
    @prop({ required: true })
    fullname: string;

    @prop({ lowercase: true, required: true, unique: true })
    email: string;

    @prop({ required: true })
    password: string;

    @prop({ required: true, enum: ["recruiter", "jobseeker"] })
    role: string;

    verificationToken: string | null;

    @prop({ default: false })
    isVerified: boolean;

    @prop({ default: false })
    isDeleted: boolean
};

const userModel = getModelForClass(User);

export default userModel;