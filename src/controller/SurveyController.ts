import {Survey} from "../entity/Survey";
import {Question} from "../entity/Question";
import {Option} from "../entity/Option";

import {getConnection, PrimaryGeneratedColumn} from "typeorm";
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
            const survey = new Survey();

            if (questions && id) {
                for (let i = 0; i < questions.length; i++) {
                    const question = new Question();
                    question.question_name = questions[i].question_name;
                    question.survey = id;

                    if (question.question_name && question.survey) {
                        await getConnection().getRepository(Question).save(question);
                    }

                    for (let j = 0; j < questions[i].options.length; j++) {
                        const option = new Option();
                        option.option_name = questions[i].options[j].option_name;

                        const question_id = await getConnection().getRepository(Question).findOne(
                            {survey: question.survey,
                                       question_name: question.question_name
                            });
                        option.question = question_id?.id;

                        if (option.option_name && option.question) {
                            await getConnection().getRepository(Option).save(option);
                        }
                    }
                }
                res.send({
                    code : 200,
                    message : '질문 및 옵션 등록 성공'
                })
            }else{
                res.send({
                    code : 400,
                    message : '질문 및 옵션 등록 실패'
                })
            }

            // join하여 id가 ?인 Survey 가져오기
            const temp = await getConnection()
                .getRepository(Survey)
                .createQueryBuilder('survey')
                .leftJoinAndSelect('survey.questions', 'question')
                .where('survey.id = :id ', {id:id})
                .getOne()

            console.log(temp)

            // questions.forEach((data : any) =>{
            //     question.survey = id;
            //     question.question_name = data.question_name;
            //     const temp1 = getConnection().getRepository(Question).save(question);
            //     console.log(temp1)
            // })

            // const delay = () => {
            //     // const randomDelay = Math.floor(Math.random() * 4) * 100
            //     return new Promise(resolve => setTimeout(resolve, 1000))
            // }
            //
            // const loop = async (questions: any) => {
            //     const promises = questions.map(async (data: any) => {
            //         return await delay()
            //             .then(() => data.question_name)
            //     })
            //
            //     const results = await Promise.all(promises)
            //
            //     await results.forEach((data : any) =>{
            //         question.survey = id;
            //         question.question_name = data;
            //         const temp1 = getConnection().getRepository(Question).save(question);
            //         console.log(temp1)
            //     })
            //
            // }
            // await loop(questions)

        }catch(error){
            await helper.failedConnectionServer(res, error);
        }
    }
}