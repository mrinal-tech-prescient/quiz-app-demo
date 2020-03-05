import { SetQuestionActionType } from '../types'

const setquestionsReducer = (state = {allquestions: [], started: false, totalquestions: 0}, action: SetQuestionActionType) => {
    switch (action.type) {
        case 'START_QUIZ':
            return Object.assign({}, state, { started: !action.payload.start });

        case 'FETCHING_QUESTIONS_THRU_API_CALL':
            return Object.assign({}, state, { started: action.payload.start });

        case 'FETCHED_ALL_QUESTIONS':
            return Object.assign({}, state, {
                allquestions: action.payload.questions,
                totalquestions: action.payload.totalquestions,
                started: action.payload.start
            });

        default: return state;
    }
};

export default setquestionsReducer;