import {Survey} from "../entity/Survey";
import {Question} from "../entity/Question";
import {Option} from "../entity/Option";

import {getConnection} from "typeorm";
import helper from "../../modules/helper"

export class SurveyController {
    static getSurvey = async (req: any, res: any) => {
        try {
            const result = await getConnection().getRepository(Survey).find();

            if (result) {
                res.send({
                    code : 200,
                    data : result,
                    message : '설문지 조회 성공'
                })
            }else{
                res.send({
                    code : 400,
                    data : [],
                    message : '설문지 조회 실패'
                })
            }
        }catch(error){
            await helper.failedConnectionServer(res, error);
        }
    }

    static addSurveyTitle = async (req: any, res: any) => {
        try {
            const {title} = req.body;
            const survey = new Survey();

            survey.survey_title = title;

            if (title){
                const result = await getConnection().getRepository(Survey).save(survey);
                res.send({
                    code : 200,
                    data : result.id,
                    message : '설문지 title 등록 성공'
                })
            } else {
                res.send({
                    code : 400,
                    data : [],
                    message : '설문지 title 등록 실패'
                })
            }
        }catch(error){
            await helper.failedConnectionServer(res, error);
   }
    }

    static addSurvey = async (req: any, res: any) => {
        try {
            const {id} = req.params;
            const {questions} = req.body;

            const question = new Question();
            const survey = new Survey();
            const option = new Option()


        }catch(error){
            await helper.failedConnectionServer(res, error);
        }
    }





}