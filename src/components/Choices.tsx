import React, {useState} from 'react'
import { InputGroup, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import {updateUserScoreAction} from '../actions/quizAction'
import {connect} from 'react-redux';
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

interface ChoicesAsProps {
        correct: string, 
        incorrect: string[], 
        usercorrect: number,
        increaseUserMarks: (score: number)=>void;
        // onClick: () => void;
    
}

const Choices: React.FC<ChoicesAsProps> = (props) => {
    const [useranswer, setUseranswer] = useState('')

    const userSelectionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUseranswer(event.target.value)
    }

    function confirmAnswerHandler (event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        if(useranswer === props.correct) {
            props.increaseUserMarks(props.usercorrect)
        }
    }

    return (
        <div> 
            <InputGroup className="mb-3">
                <div style={{flexDirection: 'column'}}>
            {
            props.incorrect ?
            props.incorrect.map((eachOption, key) => {
                    return (
                        <Form.Check
                            type='radio'
                            label = {eachOption}
                            id = {eachOption + '_' + key}
                            value = {eachOption}
                            onChange = {userSelectionHandler}
                            checked = {useranswer === eachOption}
                            />
                    )
                    
                })
             : null}</div>
             </InputGroup>
             <Button onClick={() => confirmAnswerHandler}>Confirm</Button>
             
        </div>
    )
    }


const mapStateToProps = (state: StateObj) => {
    console.log(state.started, state.allquestions)
    return({
        usercorrect: state.usercorrect,
    })
}


const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        increaseUserMarks: (old_score: number) => {
            dispatch(updateUserScoreAction(old_score));
        }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Choices)
