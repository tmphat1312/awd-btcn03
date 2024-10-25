import {
  Controller,
  Post,
  Body,
  Get,
  HttpException,
  UsePipes,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, createUserSchema } from './user.dto';
import { ZodValidationPipe } from 'src/ZodValidationPipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  @UsePipes(new ZodValidationPipe(createUserSchema))
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.register(
      createUserDto.email,
      createUserDto.password,
    );
  }

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }
}
