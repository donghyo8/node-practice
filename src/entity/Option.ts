import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import Question from "./Question";

@Entity()
export class Option {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    option_name : string;

    @ManyToOne(type => Question, question => question.options, {onDelete: 'CASCADE', onUpdate: "CASCADE"})
    question: Question;

}

export default Option