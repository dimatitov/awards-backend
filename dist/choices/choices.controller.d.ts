import { ChoicesService } from './choices.service';
export declare class ChoicesController {
    private readonly choicesService;
    constructor(choicesService: ChoicesService);
    saveChoice(data: {
        userId: string;
        category: string;
        choice: number;
        choiceName: string;
    }): Promise<import("mongoose").Document<unknown, {}, import("../schemas/choice.schema").Choice> & import("../schemas/choice.schema").Choice & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getVotesByCategory(category: string): Promise<any[]>;
    getChoice(userId: string, category: string): Promise<{
        hasChosen: boolean;
        choiceName?: undefined;
    } | {
        hasChosen: boolean;
        choiceName: string;
    }>;
    getAllVotes(): Promise<any[]>;
}
