import {Entity, PrimaryColumn, OneToMany, Column, PrimaryGeneratedColumn} from "typeorm";
import Question from "./Question";

@Entity()
export class Survey {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    survey_title: string;

    @OneToMany(type => Question, question => question.survey)
    questions: Question[];

}

export default Survey