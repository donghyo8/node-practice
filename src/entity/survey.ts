import {Entity, PrimaryColumn, OneToMany, Column} from "typeorm";
import question from "./question";

@Entity()
export class survey {
    @PrimaryColumn()
    @OneToMany(type => question, question => question.survey_id)
    survey_id: number;

    @Column()
    survey_title: string;
}

export default survey