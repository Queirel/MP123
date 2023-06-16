import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class User2 {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('text')
    name: string

}
