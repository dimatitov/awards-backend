import { Document } from 'mongoose';
export declare class Choice extends Document {
    userId: string;
    category: string;
    choice: number;
    choiceName: string;
}
export declare const ChoiceSchema: import("mongoose").Schema<Choice, import("mongoose").Model<Choice, any, any, any, Document<unknown, any, Choice> & Choice & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Choice, Document<unknown, {}, import("mongoose").FlatRecord<Choice>> & import("mongoose").FlatRecord<Choice> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
