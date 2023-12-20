"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    getUserById(arg0) {
        throw new Error("Method not implemented.");
    }
    constructor(prisma) {
        this.prisma = prisma;
    }
    async user(userWhereUniqueInput) {
        return this.prisma.user.findUnique({
            where: userWhereUniqueInput
        });
    }
    async createUser(data) {
        return this.prisma.user.create({
            data
        });
    }
    async deleteUser(where) {
        return this.prisma.user.delete({
            where
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map