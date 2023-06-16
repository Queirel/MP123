import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class ProductsService {
  
  constructor(
    @InjectRepository(Product)
    private readonly productRepository:Repository<Product>,

    @InjectRepository(User)
    private readonly userRepository:Repository<User>
  ){}
  
  async create(createProductDto: CreateProductDto) {
    const {user} = createProductDto
    // await this.userRepository.findOne({user:{user}})
    const product = await this.productRepository.create(createProductDto)
    await this.productRepository.save(product)
    return product
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product =  await this.productRepository.preload({
      id,
      ...updateProductDto
    })
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
