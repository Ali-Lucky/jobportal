import { RequestHandler } from "express";
import Joi, { Schema, ValidationError, ValidationErrorItem, ValidationOptions } from "joi";

const options: ValidationOptions = {
    abortEarly: false,
    errors: {
        wrap: {
            label: false,
        },
    },
};

const validateWithJoi = (schema: Schema): RequestHandler => (req, res, next) => {
    const validationResult = schema.validate(req.body, options);
    const error = validationResult.error as ValidationError;
    // const { error } = schema.validate(req.body, options) as ValidationError;
    if (error) {
        const errorMessage = error.details.map((err: ValidationErrorItem) => {
            const fieldName = err.path.join('.');
            return `${fieldName}: ${err.message}`;
        }).join(', ');
        return res.status(400).json({ success: false, message: errorMessage });
    } else {
        return next();
    };
};


// ============== registerValidation ===============
const registerValidation: Schema = Joi.object({
    fullname: Joi.string().trim().pattern(/^[a-zA-Z_ ]*$/).required().messages({
        'string.pattern.base': 'Invalid fullname'
    }),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/).required().messages({
        'string.pattern.base': 'Password must have 8 to 15 characters with at least one lowercase, uppercase, numeric value and a special character'
    }),
    role: Joi.string().required().valid('recruiter', 'jobseeker').messages({
        'any.only': 'Invalid role'
    }),
});

export const validateExports = {
    registerValidation: validateWithJoi(registerValidation),
};