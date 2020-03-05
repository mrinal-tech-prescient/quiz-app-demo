import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap';
import {connect} from 'react-redux';
import { nextQuestionAction } from '../actions/quizAction'
import { Dispatch } from 'redux';
import { StateObj, NextAsProps } from "../types";

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