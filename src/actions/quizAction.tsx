export const updateUserScoreAction = (old_score: number) => {
    console.log("INCREASE_USER_SCORE");
    return {
        type: "INCREASE_USER_SCORE",
        payload: old_score
    }
}

export const nextQuestionAction = (arg: number) => {
    console.log("NEXT_QUESTION_TRACK")   
    return {
        type: "NEXT_QUESTION_TRACK",
        payload: arg
    }
}
