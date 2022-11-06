import React from 'react'

function AnswerQuizz({answer,checkAnswer}) {
    const {value} = answer;
  return (
     <div className='response-quizz-input'>
         <label className="container-quizz-radio">
         <input  
         className="checkbox-response" 
         type="radio"
         onClick={()=>checkAnswer(value===true)}/>
         <span className='checkmark'></span>
         </label>
         <p className='response-text'>{answer.response}</p>
     </div>
  )
}

export default AnswerQuizz
