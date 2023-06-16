import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Product {
    
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('text')
    name: string

    @ManyToOne(()=> User, (user)=> user.products)
    @JoinColumn({name: 'user_id'})
    user:number
}
