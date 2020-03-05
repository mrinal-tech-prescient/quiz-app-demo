import { QuestionObject } from '../types'

export const startQuizAction = (start: boolean) => {
    console.log("START_QUIZ")
    return {
        type: 'START_QUIZ',
        payload: start
    }
};

export const fetchingAllQuestionsAction = (start: boolean) => {
    console.log("FETCHING_QUESTIONS_THRU_API_CALL")
    return {
        type: 'FETCHING_QUESTIONS_THRU_API_CALL',
    }
};

export const fetchedAllQuestionsAction = (questions_arg: QuestionObject[], totalquestions_arg: number, start_arg: boolean) => {
    console.log("FETCHED_ALL_QUESTIONS")   
    return {
        type: 'FETCHED_ALL_QUESTIONS',
        payload: {questions: questions_arg, totalquestions: totalquestions_arg, start: start_arg}
    }
}


