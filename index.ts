import express from 'express'
import cookieParser from 'cookie-parser'
import logger from "morgan"
import cors from 'cors'
import { createConnection } from "typeorm";
import connectionOptions from "./modules/db-connect";

const routes = express();

routes.use(cors());
routes.use(express.json());
routes.use(cookieParser());
routes.use(logger('dev'));
routes.use(express.urlencoded({ extended: false }));

// DB Connect
createConnection(connectionOptions)
    .then(() => {
        console.log("DB CONNECTION!");
    })
    .catch((error: any) => {
        console.log(error);
    });

// ROUTER
import indexRouter from './router/index'
// import surveyRouter from './routes/survey'

routes.use('/', indexRouter);
// routes.use('/survey', surveyRouter);

// ERROR HANDLER
import errorHandler from './modules/error-handler-middleware'
routes.use(errorHandler);

export default routes





