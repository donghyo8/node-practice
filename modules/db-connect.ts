import { ConnectionOptions } from "typeorm"
import survey from '../src/entity/survey'
import question from '../src/entity/question'
import option from '../src/entity/option'
import answer from '../src/entity/answer'

const connectionPool: ConnectionOptions = {
    name: "default",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "donghyo",
    password: "1234567",
    database: "survey_db",
    synchronize: true,
    logging: false,
    entities: [
        survey,
        question,
        option,
        answer
    ],
    extra: {
        "connectionLimit": 10
    }
};

export default connectionPool
