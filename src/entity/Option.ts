import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import Question from "./Question";

@Entity()
export class Option {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    option_name : string;

    @ManyToOne(type => Question, question => question.options, {cascade: true, onDelete: 'CASCADE', onUpdate: "CASCADE"})
    question: number | undefined;

}

export default Option