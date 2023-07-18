import React from 'react'
import './AnswerTimer.css'
import { useEffect, useRef, useState } from 'react';

function AnswerTimer({duration, onTimeUp}) {
  const [counter, setCounter]=useState(0);
  const [progressLoader, setProgressLoader]=useState(0);
  const intervalRef=useRef();

  useEffect(()=>{
    intervalRef.current=setInterval(()=>{
      setCounter((cur)=>cur+1);
    },1000);

    return ()=>clearInterval(intervalRef.current)
  },[]);

  useEffect(()=>{
    setProgressLoader(100*(counter/duration));
    if(counter===duration){
      clearInterval(intervalRef.current);

      setTimeout(() => {
        onTimeUp();
      }, 1000);
    }
  },[counter]);

  return (
    <div className='timer-line'>
      <div 
      style={{
        width:`${progressLoader}%`,  
      }} 
      className='progress'>
      </div>
    </div>
  )
}

export default AnswerTimer
