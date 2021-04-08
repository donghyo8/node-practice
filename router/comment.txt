// [post] /survey
//     request { "title": }
//     response { "survey_id" }
//
// [post] /survey/{survey_id}
// request
// {
//   "questions": [
//     {
//         "question_id": "",
//         "title": ""
//         "options": [
//             {
//               "option_id": "",
//               "title": ""
//             },
//             {
//               "option_id": "",
//               "title": ""
//             },
//         ]
//     },
//     {
//         "question_id": "",
//         "title": ""
//         "options": [
//             {
//               "option_id": "",
//               "title": ""
//             },
//             {
//               "option_id": "",
//               "title": ""
//             },
//         ]
//     }
//   ]
// }

// 1. url에 있는 survey_id를 통해 survey를 가져옴
// 2. request의 questions 루프를 돌아 table에 삽입(이때, transaction 시작)
// 3. 이때 question 삽입 후 나오는 question_id를 포함해 option 삽입
// 4. 모든 question 루프가 끝난 후 transaction.commit
// 5. 삽입 실패시 transaction을 롤백해 400 error