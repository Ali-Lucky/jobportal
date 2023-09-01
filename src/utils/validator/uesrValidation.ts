import {TypeOf, object, string} from 'zod'

export const createUserSchema = object({
    body:object({
        fullname: string({
            required_error: "Fullname is required"
        }).regex(/^[a-zA-Z_ ]*$/,"Invalid fullname"),
        email:string({
            required_error:"Email is required"
        }).email("Invalid email"),
        password:string({
            required_error:"Password is required"
        }).min(8,"Password is too short, should be minimum 8 characters")
        .max(15,"Password is too long, can be maximum 15 characters"),
        role:string({
            required_error:"Role is required"
        })
    })
});

export type createUserInput = TypeOf<typeof createUserSchema>["body"]