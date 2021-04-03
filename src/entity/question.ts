import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import survey from "./survey";
import option from "./option";

@Entity()
export class question {
    @ManyToOne(type => survey, survey => survey.survey_id)
    survey_id: survey;

    @PrimaryGeneratedColumn()
    @OneToMany(type => option, option => option.question_id)
    question_id: number;

    @Column()
    question_order : number;

    @Column()
    question_name : string;

}
export default question