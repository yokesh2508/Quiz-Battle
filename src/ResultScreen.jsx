import React, { useMemo, useState } from 'react'
import './ResultScreen.css'
import ReviewAns from './ReviewAns'

const ResultScreen = (props) => {
  let [showReview,setShowReview]=useState(false);
  let {score,anshis,restart}=props

  let stats=useMemo(()=>{
    return anshis.reduce((a,e)=>{
      if(e.iscorrect){
        a.correct++;
      }
      else{
        a.wrong++;
      }
      return a;
    },{
      correct:0,
      wrong:0
    })
  },[anshis])

  let setShow=()=>{
    setShowReview(!showReview)
  }

  if(showReview){
    return <ReviewAns anshis={anshis} setShow={setShow}></ReviewAns>
  }
  return (
    <div id='maindivResScreen'>
     <div id='innerdivResScreen'>
      <header id='QFHead'><h1 id='quizF'>🎉Quiz Finished!</h1></header>
      <main id='scoreMain'><h2 id='scoredis'>Your Score:{score}/100</h2></main>
      <main id='card'>
        <h2 id='correctCount'>Correct Answers:{stats.correct}</h2>
        <h2 id='wrongCount'>Wrong Answers:{stats.wrong}</h2>
        <h2 id='totalqCount'>Total Questions:{anshis.length}</h2>
      </main>
      <button id='showRevBtn'onClick={setShow}>Review Your Answers</button>
      <button id='restartQuizbtn' onClick={restart}>Restart Quiz</button>
    
     </div>
    </div>
  )
}
export default ResultScreen