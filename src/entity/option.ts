import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import question from "./question";

@Entity()
export class option {
    @PrimaryGeneratedColumn()
    option_id: number;

    @ManyToOne(type => question, question => question.survey_id)
    survey_id: number;

    @ManyToOne(type => question, question => question.question_id)
    question_id: number;

    @Column()
    option_order : number;

    @Column()
    option_name : string;
}

export default option