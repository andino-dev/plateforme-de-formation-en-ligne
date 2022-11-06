import React from 'react'
import { useGlobalContext } from '../Content/AppProvider';
import {useDashBoardContext} from '../Content/DashBoardProvider';
import ModalLanch from './ModalLanch';
function DashBoardContent() {
 const {modalLanch} = useDashBoardContext();
 const {state,logoutUser}= useGlobalContext();
 if(state.auth.isAuthenticated && localStorage.getItem('jwtToken')){
  return (
    <div>
    <ModalLanch/>
     <div className='dashboard-flex'>
      <div className='dashboard-content'>
        <div className='logo-content'>
            <p className='content-logo-left'>e-<span className='content-learning'>learning</span></p>
        </div>
        <div className="user-logo">
          <button  className = "logout" onClick={logoutUser}>se deconnecter</button>
          <h1 className='name-user'>{state.auth.user.name[0]}</h1>
        </div>
      </div>  
     </div>
     <div className='section-welcome'>
       <h1 className ="dashboard-welcome-name">Welcome <span>{state.auth.user.name}</span></h1>
       <h5 className='sub-title'> Si vous voulez savoir votre niveau, vous pouvez passez les differentes Quizz suivantes</h5>
       <p className="description"> Ses tests vont vous aidez à connaitre votre niveau afin de mieux entamer les cours que vous souhaitez entreprendre</p>
     </div>
     <section>
       <div className='quizz-languages'>
            <div className='quizz'> 
              <h3 className='quizz-title'>HTML: HyperText Markup Language</h3>
              <p className="quizz-description"> The test is not official, it's just a nice way to see how much you know, or don't know, about HTML.</p>
              <button className='quizz-start' onClick={()=>modalLanch("html")} >start the HTML Quizz</button>
            </div>
            <div className='quizz'>
              <h3 className='quizz-title'>CSS: Cascading Style Sheets</h3>
              <p className="quizz-description"> The test is not official, it's just a nice way to see how much you know, or don't know, about CSS.</p>
              <button className='quizz-start' onClick={()=>modalLanch('css')} >start the CSS Quizz</button>
            </div>
            <div className='quizz'>
              <h3 className='quizz-title'>JS: Algorithms JavaScript</h3>
              <p className="quizz-description"> The test is not official, it's just a nice way to see how much you know, or don't know, about JavaScript.</p>
              <button className='quizz-start' onClick={()=>modalLanch("javascript")}>start the JS Quizz</button>
            </div>                        
       </div>
     </section>
     
    </div>  
  )
}
}

export default DashBoardContent