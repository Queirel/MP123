import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
    
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('text')
    name: string

}
