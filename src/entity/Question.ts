import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import Option from "./Option";
import Survey from "./Survey";

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    question_name : string;

    @ManyToOne(type => Survey, survey => survey.questions, {cascade: true, onDelete: 'CASCADE', onUpdate: "CASCADE"})
    survey: Survey;

    @OneToMany(type => Option, option => option.question)
    options : Option[];

}
export default Question