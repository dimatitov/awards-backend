import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    getName(userId: string): Promise<{
        name: string;
    }>;
}
