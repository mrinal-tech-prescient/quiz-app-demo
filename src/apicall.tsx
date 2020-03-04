import axios from 'axios';

interface QuestionObject {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answer: string[]
}

interface Questions {
    response_code: number,
    results: QuestionObject[]
}

interface APIResponse {
    data: Questions,
    status: number,
    statusText: string,
}

const targetURL = 'https://opentdb.com/api.php?amount=10'

export const getQuizQuestions = () => {
    return axios.get(targetURL).then((response: APIResponse) => {
        console.log(response);
        console.log(response.data);
        console.log(response.data.results);
        return response.data.results
    })
}