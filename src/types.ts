import { Dispatch } from 'redux';

export interface QuizActionType {
    type: string,
    payload: number
}

export interface QuestionObject {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

export interface Questions {
    response_code: number,
    results: QuestionObject[]
}

export interface APIResponse {
    data: Questions,
    status: number,
    statusText: string,
}

export interface SetQuestionActionType {
    type: string,
    payload: {questions :string, totalquestions: number, start: boolean}
}

export interface StateObj {
    countOfQuestion: number,
    usercorrect: number,
    allquestions: QuestionObject[],
    started: boolean,
    totalquestions: number
}

export interface ChoicesAsProps {
        correct: string, 
        incorrect: string[], 
        usercorrect: number,
        increaseUserMarks: (score: number)=>void;
        // onClick: () => void;
    
}

export interface NextAsProps {
    count: number,
    dispatchNextQuestionAction: (number: number)=>void;
}

export interface QuestionProps {
    isQuizOn?: number,
    allQuestionsForQuiz?: QuestionObject[],
    totalQuestions?: number,
    count?: number,
    correctanswers?: number,
    //dispatchNextQuestionAction: (number: number)=>void;
}

export interface StartProps {
    dispatchStartAction: (start: boolean) => any;
}