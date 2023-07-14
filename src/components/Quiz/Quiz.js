import React from 'react';
import { useState } from 'react';
import { resultInitialState } from '../questions/Constants';
import AnswerTimer from '../AnswerTimer/AnswerTimer';
import './QuizStyle.css';

const Quiz=({questions})=> {
  const [currentQuestion, setCurrentQuestion]=useState(0);
  const {question, choices, correctAnswer}=questions[currentQuestion];

  const [answerIndex, setAnswerIndex]=useState(null);
  const [answer, setAnswer]=useState(null);
  const [result, setResult]=useState(resultInitialState);
  const [showResult, setShowResult]=useState(false);

  const onAnswerClick=(answer, index)=>{
    setAnswerIndex(index)
    if(answer===correctAnswer){
      setAnswer(true);
    }else{
      setAnswer(false);
    }
  }

  const onClickNext=()=>{
    setAnswerIndex(null);
    setResult((prev)=>
      answer?{
        ...prev,
        score:prev.score+5,
        correctAnswers:prev.correctAnswers+1
      }:{
        ...prev,
        wrongAnswers:prev.wrongAnswers+1
      }
    )

    if(currentQuestion!==questions.length-1){
      setCurrentQuestion((prev)=>prev+1);
    }else{
      setCurrentQuestion(0);
      setShowResult(true);
    }
  }

  const tryAgain=()=>{
    setResult(resultInitialState)
    setShowResult(false)
  }

  return (
    <div>
      {!showResult?(
        <>
        <AnswerTimer/>
        <span>
          {currentQuestion+1}
        </span>
        <span>
          /{questions.length}
        </span>
        <h2>{question}</h2>
        <ul>
          {
            choices.map((answer, index)=>(
              <li
                onClick={()=>onAnswerClick(answer, index)}
                key={answer}
                className={answerIndex===index?'selected-answer':null}
              >
                {answer}
              </li>
            ))
          }
        </ul>
        <footer>
          <button onClick={onClickNext} disabled={answerIndex===null}>
            {currentQuestion===questions.length-1?"Finish":"Next"}
          </button>
        </footer>
        </>
      ):<div>
        <h3>Result</h3>
        <p>
          Total Questions:<span>{questions.length}</span>
        </p>
        <p>
          Total Score: <span>{result.score}</span>
        </p>
        <p>
          Correct Answers: <span>{result.correctAnswers}</span>
        </p>
        <p>
          Wrong Answers: <span>{result.wrongAnswers}</span>
        </p>
        <button onClick={tryAgain}>Try Again</button>
      </div>}
      
    </div>
  )
}

export default Quiz
