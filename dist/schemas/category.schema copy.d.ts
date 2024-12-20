import { Document } from 'mongoose';
declare class Item {
    id: number;
    name: string;
}
export declare class Category extends Document {
    id: number;
    name: string;
    items: Item[];
}
export declare const CategorySchema: import("mongoose").Schema<Category, import("mongoose").Model<Category, any, any, any, Document<unknown, any, Category> & Category & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Category, Document<unknown, {}, import("mongoose").FlatRecord<Category>> & import("mongoose").FlatRecord<Category> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export {};
