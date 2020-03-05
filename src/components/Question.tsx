import React from 'react';
import Choices from './Choices';
import Next from './Next';
import Start from './Start';
import {connect} from 'react-redux';
import { StateObj, QuestionProps } from "../types";

const Question: React.FC<QuestionProps> = (props) => {    
    return (
        <div>
            {props.isQuizOn && props.count && props.totalQuestions && 
                props.count<=props.totalQuestions && props.allQuestionsForQuiz
            ?  
            <div><h1>Your Question Goes Here ...</h1>
                <h3>{props.allQuestionsForQuiz[props.count-1].question}</h3>
                <Choices 
                correct={props.allQuestionsForQuiz[props.count-1].correct_answer} 
                incorrect={props.allQuestionsForQuiz[props.count-1].incorrect_answers}
                />
                <Next /></div>
            : 
            <div><Start /></div>
            }
            {(typeof props.count==='number') ? (props.count-1 === props.totalQuestions) : null && <div>
            <h2>You Answered {props.correctanswers ? props.correctanswers : 0} Correct Answers and {10-(props.correctanswers ? props.correctanswers : 0)} Answers </h2>
            <h2>Your Grade: {(props.correctanswers ? props.correctanswers : 0)*100/10} %age </h2></div>}
        </div>
    )
}

const mapStateToProps = (state: StateObj) => {
    return({
        isQuizOn: state.started,
        allQuestionsForQuiz: state.allquestions,
        totalQuestions: state.totalquestions,
        count: state.countOfQuestion,
        correctanswers: state.usercorrect
    })
}

export default connect(mapStateToProps, null)(Question)
