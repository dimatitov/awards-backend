import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';
export declare class AuthService {
    private userModel;
    constructor(userModel: Model<User>);
    login(name: string): Promise<{
        userId: string;
    }>;
}
