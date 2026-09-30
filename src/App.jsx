import React, { useState } from 'react'
import StartScreen from './StartScreen';
import Quiz from './Quiz.jsx'

const App = () => {

  let [quizStarted,setQuizStarted]=useState(false);

  let SetQuiz=()=>{
      setQuizStarted(true);
  }

  return (

    <div>{quizStarted?(<Quiz/>):(<StartScreen StartQuiz={SetQuiz}/>)}</div>
    
  )
}

export default App
