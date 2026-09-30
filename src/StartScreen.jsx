import React from 'react'
import './StartScreen.css'

const StartScreen = (props) => {

    let {StartQuiz}=props
    
  return (
   
    <div id='headstscreen'>
      <main id='mainstscreen'>
          <h1 id='quizh1'>Quiz-Battle 🚀</h1>
          <p id='testPara'>Test Your Knowledge</p>  
          <button id='startbtn' onClick={StartQuiz}>Start Quiz</button>
      </main>
    </div>
  )
}

export default StartScreen
