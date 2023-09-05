import { RequestHandler } from "express";
import { AnyZodObject } from "zod";

const validateResource = (schema: AnyZodObject): RequestHandler => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        });
        next();
    } catch (error:any) {
        return res.status(400).json({success:false, message: error.message});
    };
};

export default validateResource;