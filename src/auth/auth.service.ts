import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { User2 } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto2 } from './dto/create-user.dto';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User2)
    private readonly userRepository2: Repository<User2>
  ){}


  async create(createUserDto2: CreateUserDto2): Promise<User2> {
    const user = await this.userRepository2.create(createUserDto2)
    await this.userRepository2.save(user)
    return user
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
