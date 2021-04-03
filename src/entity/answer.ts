import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import option from "./option";

@Entity()
export class answer {
    @PrimaryGeneratedColumn() // 임시
    temp: number;

    @ManyToOne(type => option, option => option.survey_id)
    survey_id: number;

    @ManyToOne(type => option, option => option.question_id)
    question_id: number;

    @Column()
    option_select : number;
}

export default answer