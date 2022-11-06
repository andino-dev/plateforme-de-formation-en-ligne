import React ,{useEffect}from 'react'
import { useDashBoardContext } from '../Content/DashBoardProvider'
import AnswerQuizz from './AnswerQuizz';
import '../Css/AnswerQuizz.css';
function TestQuizz() {
  
  const {data,index,isModalLanch,checkAnswer,nextQuestions,timer,setTimer,width,setWidth}= useDashBoardContext();
  const {question,indice,responses} = data[index];
  useEffect(() => {
  const timeout = setInterval(() => {
     setTimer((oldTimer)=>{
       let currenTimer= oldTimer -1000;
       if(oldTimer>0){
         return currenTimer;
       }
     });
   },1000);
  return ()=> clearInterval(timeout);
  }, [timer]);
  
  useEffect(()=>{
      if(timer===0){
        nextQuestions();
        setWidth(0);
      }
  },[timer])

  useEffect(()=>{
    const timerbar = setInterval(()=>{
      setWidth((oldWidth)=>{
        let currentWidth = oldWidth +1000;
        if(oldWidth<75000){
         return  currentWidth;
        }
      })
    },1000);
    return ()=> clearInterval(timerbar);
  },[width]);
     let widthBar = Math.round((width*100)/75000);
       /*   minute  */
     let minute = Math.floor(timer/60000);
  
     let seconds = (timer - (minute*60000))/1000;
       /*   minute  */
     const style={
         width:`${widthBar}%`,
         backgroundColor: "#0a89f1",
         height:'10px',
         borderRight: '2px solid ##0a89f1',
         borderRadius: '2px'
     }
  return (
    <section  key={index} className='Quizz-section-test'>
         <div className="Quizz-section-content">
            <div className="title-content-quizz">
              <h1 className="title-quizz-test">{isModalLanch.type} Assessment</h1>
            </div>
            <div className="content-quizz">
              <h3 className = "question-quizz">{question}</h3>
              <span className={`${indice?"indice-code isIndice":'indice-code'}`}>
                <p className='indice-code-text'>{indice}</p>
              </span>
            </div>
            <div className='answer-quizz-list'>
              {responses.map((answer,indexResponse)=>{
                return ( <AnswerQuizz key={indexResponse} answer={answer} checkAnswer={checkAnswer}></AnswerQuizz>)
              })}
            </div>
            <div className='footer-quizz-test'>
              <div style={style}>
              <span></span>
              </div>
              <div className='delay-test'>
                <span className='timer-test-chrono'>{`${minute<10?"0"+minute :minute} : ${seconds<10?"0"+seconds : seconds}`}</span>
                <button  className="next-question"onClick={nextQuestions}>next</button>
              </div>
            </div>
         </div>
    </section>
  )
}

export default TestQuizz