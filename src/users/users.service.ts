import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor( 
  @InjectRepository(User)
  private readonly userRepository: Repository<User>
){}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = await this.userRepository.create(createUserDto)
    await this.userRepository.save(user)
    return user
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find()
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({where:{id}});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
