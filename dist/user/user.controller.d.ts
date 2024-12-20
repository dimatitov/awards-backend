import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    login(id: string): Promise<{
        name: string;
    }>;
}
