import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap';
import {connect} from 'react-redux';
import { nextQuestionAction } from '../actions/quizAction'
import { Dispatch } from 'redux';

interface QuestionObject {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

interface StateObj {
    countOfQuestion: number,
    usercorrect: number,
    allquestions: QuestionObject[],
    started: boolean,
    totalquestions: number
}

interface NextAsProps {
        count: number,
        dispatchNextQuestionAction: (number: number)=>void;
}

const Next: React.FC<NextAsProps> = (props) => {

    function nextQuestionHandler (event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        props.dispatchNextQuestionAction(props.count)
    }

    return (
        <div>
            <ButtonToolbar>
                <Button variant="primary"
                    onClick={()=> nextQuestionHandler}>Next</Button>
            </ButtonToolbar>
        </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    dispatchNextQuestionAction: (old_count: number) => {
        console.log("next question handler", old_count);
        dispatch(nextQuestionAction(++old_count));
    }
})

const mapStateToProps = (state: StateObj) => {
    console.log(
        "Quiz is on: ", state.started, 
        "Questions: ", state.allquestions, 
        "Total Questions: ", state.totalquestions,
        "Count of Question:", state.countOfQuestion)
    return({
        count: state.countOfQuestion
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Next)