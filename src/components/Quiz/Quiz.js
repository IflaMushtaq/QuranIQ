import React from 'react';
import { useState } from 'react';
import { resultInitialState } from '../questions/Constants';
import AnswerTimer from '../AnswerTimer/AnswerTimer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { slideInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './QuizStyle.css';
import Confetti from '../Confetti';


const Quiz=({questions})=> {

  const styles = {
    slideInLeft: {
      animation: 'x 1.5s',
      animationName: Radium.keyframes(slideInLeft, 'slideInLeft'), 
    }
  };

  const [currentQuestion, setCurrentQuestion]=useState(0);
  const {question, choices, correctAnswer}=questions[currentQuestion];
  const [answerIndex, setAnswerIndex]=useState(null);
  const [answer, setAnswer]=useState(null);
  const [result, setResult]=useState(resultInitialState);
  const [showResult, setShowResult]=useState(false);
  const [showAnswerTimer, setShowAnswerTimer]=useState(true);

  const onAnswerClick=(answer, index)=>{
    setAnswerIndex(index)
    if(answer===correctAnswer){
      setAnswer(true);
    }else{
      setAnswer(false);
    }
  }

  const onClickNext = (finalAnswer) => {
    setAnswerIndex(null);
    setShowAnswerTimer(false);
    setResult((prev) =>
      finalAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
  
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  
    setTimeout(() => {
      setShowAnswerTimer(true);
      setAnswer(null); 
    });
  };

  const tryAgain=()=>{
    setResult(resultInitialState)
    setShowResult(false)
  }

  const handleTimeUp = () => {
    if (answerIndex === null) {
      setAnswer(false);
    }
    onClickNext(answer !== null ? answer : false); 
  };

  return (
    <div className='quiz-container'>
      {result.score===50 && <Confetti/>}
      <StyleRoot>
        <div style={styles.slideInLeft}>
        <h1 className='quiz-title'>QuranIQ</h1>
          <div className='quiz-box mb-3'>
            {!showResult ? (
              <>
                <div className='text-warning text-weight-bold mb-3' style={{borderTopLeftRadius: '5px', borderTopRightRadius:'5px'}}>
                {showAnswerTimer && <AnswerTimer duration={5} onTimeUp={handleTimeUp} />}
                  <span>
                    {currentQuestion + 1}
                  </span>
                  <span>
                    /{questions.length}
                  </span>
                </div>
                <h4 className='text-white'>{question}</h4>
                <ul className='p-0'>
                  {
                    choices.map((answer, index) => (
                      <li
                        onClick={() => onAnswerClick(answer, index)}
                        key={answer}
                        className={answerIndex === index ? 'selected-answer' : null}
                      >
                        {answer}
                      </li>
                    ))
                  }
                </ul>
              </>
            ) : (
              <div className='text-center mt-5 text-light quiz-p'>
                
                <h2 >Score: &nbsp;<span className='text-warning'>{result.score}/50</span></h2>
                <hr className='mb-5' />
                <p>
                  Total Questions: &nbsp;<span className='text-warning'>{questions.length}</span>
                </p>
                <p>
                  Correct Answers: &nbsp;<span className='text-warning'>{result.correctAnswers}</span>
                </p>
                <p>
                  Wrong/Unattempted Answers: &nbsp;<span className='text-warning'>{result.wrongAnswers}</span>
                </p>
                <button className='btn btn-warning mt-5' style={{fontFamily: "Georgia" }} onClick={tryAgain}>Try Again &nbsp;  <FontAwesomeIcon icon={faRefresh} /></button>
              </div>
            )}
            <div className='quiz-button-container'>
              {!showResult && (
                <button className='btn btn-warning' style={{fontFamily: "Georgia" }} onClick={() => onClickNext(answer)} disabled={answerIndex === null}>
                  {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
              )}
            </div>
          </div>
        </div>
      </StyleRoot>
      <div className=' fixed-bottom'>
        <p className='m-2 copyright'>
          Made with <i className="fa-solid fa-heart text-red" style={{color: 'red'}}></i> by
          Ifla Mushtaq
        </p>
      </div>
    </div>
  )
}

export default Quiz
