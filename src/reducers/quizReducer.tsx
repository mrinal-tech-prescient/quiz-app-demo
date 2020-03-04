interface QuizActionType {
    type: string,
    payload: number
}

const quizReducer = (state = { countOfQuestion: 1, usercorrect: 0 },action: QuizActionType) => {
    switch (action.type) {

        case "INCREASE_USER_SCORE":
            return Object.assign({}, state, { usercorrect: ++action.payload });

        case "NEXT_QUESTION_TRACK":
            return Object.assign({}, state, { countOfQuestion: action.payload });

        default:
            return state;
    }
};

export default quizReducer;
