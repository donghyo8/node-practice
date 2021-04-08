import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

}

export default User