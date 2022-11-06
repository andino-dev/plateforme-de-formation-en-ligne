import React from 'react'
import {AiOutlineCloseSquare } from 'react-icons/ai';
import {useDashBoardContext} from '../Content/DashBoardProvider';
import '../Css/modal.css'
const ModalLanch =()=> {
  const {isModalLanch,launchTest,closeModal} = useDashBoardContext();
  const {type} = isModalLanch;
  return (
    <div className={`${isModalLanch.value?'modal-container isOpen': 'modal-container'}`}>
      <div className='modal-content'>
       <button className='icon-modal'onClick={closeModal}><AiOutlineCloseSquare/></button>
       <h4 className='title-modal-skills'>Test your skills</h4>
        <p className='description-modal'> Ce test ne peut etre interrompus et meme si ce n'est qu'un test d'aptitude vous  pourrez y acceder tant de fois pour voir votre performance.
        Une question dure au moins 1 minutes 15 secondes et il y a au moins 30 questions</p>
        <button className='button-launchTest' onClick={(e)=>launchTest(e,type)}>
          Lancer le test
        </button>
      </div>
    </div>
  )
}

export default ModalLanch