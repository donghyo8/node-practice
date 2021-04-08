import express from 'express'
const routes = express.Router();
import {SurveyController} from '../src/controller/SurveyController'
import typeorm from 'typeorm'

// 모든 설문지 목록 조회(등록된) --> 추후 수정하는 API도 작성
routes.get('/admin', SurveyController.getSurvey )

// 설문지 등록 (request로 title을 저장하고 reponse로 id 받아옴)
routes.post('/admin', SurveyController.addSurveyTitle)

// 설문지 등록 (url에 포함된 id로 질문과 옵션 저장)
routes.post('/admin/:id', SurveyController.addSurvey)








export default routes