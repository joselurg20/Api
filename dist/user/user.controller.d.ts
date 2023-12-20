import { UserService } from "./user.service";
import { User as UserModel } from "@prisma/client";
export declare class UserController {
    private userS;
    constructor(userS: UserService);
    getUserById(id: string): Promise<UserModel>;
    createUser(userData: {
        name?: string;
        email: string;
    }): Promise<UserModel>;
    deleteUser(id: string): Promise<UserModel>;
}
