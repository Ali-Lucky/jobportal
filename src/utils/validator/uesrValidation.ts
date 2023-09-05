import { TypeOf, object, string } from 'zod'

export const createUserSchema = object({
    body: object({
        fullname: string({
            required_error: "Fullname is required"
        }).regex(/^[a-zA-Z_ ]*$/, "Invalid fullname"),
        email: string({
            required_error: "Email is required"
        }).email("Invalid email"),
        password: string({
            required_error: "Password is required"
        }).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/, "Password must have 8 to 15 characters with at least one lowercase, uppercase, numeric value and a special character"),
        role: string({
            required_error: "Role is required"
        })
    })
});

export type createUserInput = TypeOf<typeof createUserSchema>["body"]