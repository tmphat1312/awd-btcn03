import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async register(
    email: string,
    password: string,
  ): Promise<{
    message: string;
  }> {
    const existingUser = await this.usersRepository.findOne({
      where: { email },
    });

    if (existingUser)
      throw new BadRequestException('User with this email already exists');

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.usersRepository.create({
      email,
      password: hashedPassword,
    });

    await this.usersRepository.save(user);

    return {
      message: 'User created',
    };
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find({
      order: { createdAt: 'DESC' },
    });
  }
}
