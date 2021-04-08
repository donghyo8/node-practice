import { ConnectionOptions } from "typeorm"
import survey from '../src/entity/Survey'
import question from '../src/entity/Question'
import option from '../src/entity/Option'
import Answer from '../src/entity/Answer'

const connectionPool: ConnectionOptions = {
    name: "default",
    type: "mariadb",
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
        Answer
    ],
    extra: {
        "connectionLimit": 10
    }
};

export default connectionPool
