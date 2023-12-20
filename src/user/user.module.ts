import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prima.service';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';


@Module({
    controllers: [UserController],
    providers: [UserService, AppService],
})
export class UserModule {}
