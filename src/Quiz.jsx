import React, { useCallback, useEffect, useRef, useState } from 'react'
import './Quiz.css'
import { questions } from './data/question'
import ResultScreen from './ResultScreen'
import OptionButton from './OptionButton'

const Quiz = () => {
  let [selectedopt,setSelectedOption]=useState(null);
  let [score,setScore]=useState(0);
  let [currentQues,setCurrentQues]=useState(0);
  let [quizFinished,setquizFinished]=useState(false);
  let [answerHistory,setAnsHistory]=useState([]);
  let [timeLeft,setTimeLeft]=useState(10);

  useEffect(()=>{
    if(quizFinished){
      return;
    }
    let timer=setInterval(()=>{
      setTimeLeft(prevtimeLeft=>prevtimeLeft-1)
    },1000)
    return ()=>{
      clearInterval(timer);
    }
  },[quizFinished])

  useEffect(()=>{
    if(timeLeft === 0){
      // console.log("TIMEOUT", currentQues);
      handlenext(true);
    }
  },[timeLeft])

  // console.log(selectedopt);
  // console.log(score);

  useEffect(()=>{
    handlebtn()
  },[currentQues])
  let mybtn=useRef();
  function handlebtn(){
    if(mybtn.current){
    mybtn.current.focus();
    }
  }

  let handleSelectedOption=useCallback((opt)=>{
    setSelectedOption(opt)
  },[])
  
  function handlenext(isTimeout = false){
    if(selectedopt===null && !isTimeout){
      return;
    }

    // console.log(currentQues);
    // console.log(questions.length); 
    // console.log(selectedopt);
    // console.log(questions[currentQues].answer);
    
    let isCorrect=selectedopt===questions[currentQues].answer;
    // console.log(isCorrect);

      setAnsHistory(prev=>[
        ...prev,
        {
          question:questions[currentQues].question,
          selectedOption:selectedopt,
          correctAnswer:questions[currentQues].answer,
          iscorrect:isCorrect,
        }
      ]
      )

    if(isCorrect){
      // setScore(score+10);
      setScore(prevScore => prevScore + 10);
    }
    if(currentQues===questions.length-1){
      // console.log("Quiz finished");
      setquizFinished(true);
    }
    else{
    setCurrentQues(currentQues+1);
    setSelectedOption(null);
    setTimeLeft(10);
    } 
    // console.log("Current:", currentQues);
    // console.log("Last:", questions.length - 1);
  }
 
  // console.log(answerHistory);

  function restartQuiz(){
    setSelectedOption(null);
    setScore(0);
    setCurrentQues(0);
    setquizFinished(false);
    setAnsHistory([]);
    setTimeLeft(10);
  }
  
  if(quizFinished){
    return <ResultScreen score={score} anshis={answerHistory} restart={restartQuiz}></ResultScreen>
  }
  else{
  return (
    <div id='headQuiz'>
      <main id='mainQuiz'>
        <div id='quesnodiv'>
          <h1 id='quesno'>Question-{currentQues+1}</h1>
          <div id='timerDiv'><p id='timer'>{String(timeLeft).padStart(2, '0')}</p></div>
          
        </div>
        <section id='quesSection'>
          <h2 id='ques'>{questions[currentQues].question}</h2>
        </section>
       <section id='optSection'>
        {questions[currentQues].options.map((opt,i)=>{
          return <OptionButton 
          key={opt} 
          opt={opt} 
          id='opt' 
          onSelect={handleSelectedOption} /*ref={i===0? mybtn: null}*//>
        })}
       </section>
        <br />
        <button id='nextbtn' onClick={handlenext}>Next</button>
      </main>
    </div>
  )
}
}
export default Quiz