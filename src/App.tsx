import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from './components/Question';
interface QuestionProps {
  isQuizOn?: number,
  allQuestionsForQuiz?: QuestionObject[],
  totalQuestions?: number,
  count?: number,
  correctanswers?: number,
  // dispatchNextQuestionAction?: (number: number)=>void;
}

interface QuestionObject {
  category: string,
  type: string,
  difficulty: string,
  question: string,
  correct_answer: string,
  incorrect_answers: string[]
}

const App: React.FC<QuestionProps> = ()=> {
  return (
    <div className="App">
      <div className="container">
      <Question />
        <div>
        </div>
      </div>
    </div>
  );
}

export default App;
