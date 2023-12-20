import { User, Prisma } from "@prisma/client";
import { PrismaService } from "../prima.service";
export declare class UserService {
    private prisma;
    getUserById(arg0: {
        id: number;
    }): {
        id: number;
        email: string;
        name: string;
    } | PromiseLike<{
        id: number;
        email: string;
        name: string;
    }>;
    constructor(prisma: PrismaService);
    user(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User | null>;
    createUser(data: Prisma.UserCreateInput): Promise<User>;
    deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User>;
}
