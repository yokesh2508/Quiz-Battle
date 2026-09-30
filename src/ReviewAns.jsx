import React from 'react'
import './ReviewAns.css'


const ReviewAns = (props) => {
  let {anshis,setShow}=props;
 
  return (
    <div id='reviewdiv'>
      <section id='ansRevSection'>
        <h2 id='ansrev'>Answer Review</h2>
        {anshis.map((e,i)=>{
        return <div id='answers' key={i}>
          <h3>Question:{i+1}</h3>
          <p>{e.question}</p>
          <p>Your Answer: {e.selectedOption}</p>
          <p>Correct Answer: {e.correctAnswer}</p>
          <p>{e.iscorrect?"✅Correct":"❌Wrong"}</p>
        </div>
      })}
      </section>
      <footer id='backFooter'>
        <button id='backbtn'onClick={setShow}>Back to Result</button>
      </footer>
    </div>
  )
}

export default ReviewAns
