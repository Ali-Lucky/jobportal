// import { RequestHandler } from "express";
// import { CRUDService } from "../utils/services/genericServices";
// import userModel, { User } from "../models/user";

// const userService = new CRUDService<User>(userModel);

// export const register: RequestHandler = async (req, res): Promise<object> => {
//     try {
//         const data: User = req.body;
//         const createData = await userService.create(data);

//         return res.status(201).json({ succes: true, data: createData });
//     } catch (error: any) {
//         return res.status(500).json({ success: false, error: error.message });
//     };
// };