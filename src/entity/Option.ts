import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import Question from "./Question";
import Survey from "./Survey";

@Entity()
export class Option {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    option_name : string;

    @ManyToOne(type => Question, question => question.options)
    question: Question;

}

export default Option