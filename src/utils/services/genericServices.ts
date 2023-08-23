import { Document, Model, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import userModel, { User } from "../../models/user";

export class CRUDService<T extends Document> {
    constructor(private model: Model<T>) {};

    create(input: T): Promise<T>{
        return this.model.create(input);
    };
};

// export const create = (input: User): object => {
//     return userModel.create(input);
// };

export const findOne = (query: FilterQuery<User>, options: QueryOptions): object => {
    return userModel.findOne(query, {}, options);
};

export const findById = (id: string, options: QueryOptions): object => {
    return userModel.findById(id, {}, options);
};

export const find = (query: FilterQuery<User>, options: QueryOptions): object => {
    return userModel.find(query, {}, options);
};

export const findOneAndUpdate = (query: FilterQuery<User>, update: UpdateQuery<User>, options: QueryOptions): object => {
    return userModel.findOneAndUpdate(query, update, options);
};

export const findByIdAndUpdate = (id: string, update: UpdateQuery<User>, options: QueryOptions): object => {
    return userModel.findByIdAndUpdate(id, update, options);
};