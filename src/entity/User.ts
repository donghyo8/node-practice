import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import option from "./Option";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

}

export default User