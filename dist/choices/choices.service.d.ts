import { Model } from 'mongoose';
import { Choice } from '../schemas/choice.schema';
export declare class ChoicesService {
    private choiceModel;
    constructor(choiceModel: Model<Choice>);
    saveChoice(userId: string, category: string, choice: number, choiceName: string): Promise<import("mongoose").Document<unknown, {}, Choice> & Choice & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getChoice(userId: string, category: string): Promise<Choice | null>;
    getAllVotes(): Promise<any[]>;
    getVotesByCategory(category: string): Promise<any[]>;
}
