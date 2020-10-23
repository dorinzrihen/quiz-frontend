import React ,{useState} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import login from './Login';
import answerquiz from './AnswerQuiz';
import HomePage from './HomePage';


const QuizApp = () => {
  

  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" render={() => <HomePage/> }/>
        <Route exact path="/:username" render={() => <HomePage/> }/>
        <Route exact path="/login" component={login}></Route>
        <Route exact path="/answerquiz" component={answerquiz}></Route>
      </BrowserRouter>
    </div>
  );
};

export default QuizApp;
