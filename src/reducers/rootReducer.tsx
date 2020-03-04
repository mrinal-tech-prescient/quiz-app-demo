import {combineReducers} from 'redux';
import quizReducer from './quizReducer';
import setquestionsReducer from './setquestionsReducer';

const rootReducer = combineReducers({
    quizReducer: quizReducer,
    setquestionsReducer: setquestionsReducer
});

export default rootReducer;