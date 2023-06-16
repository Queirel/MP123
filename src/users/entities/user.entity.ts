import { Product } from 'src/products/entities/product.entity';
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('text')
    name: string

    @OneToMany(
        ()=> Product,
        (product)=> product.user,
        {cascade: true}
    )
    products:Product
}
