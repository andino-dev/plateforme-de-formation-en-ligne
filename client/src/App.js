import React,{useEffect} from 'react'
import {Routes,Route} from 'react-router-dom';
import Root from './Components/Root';
import Signin from './Components/Signin';
import Login from './Components/Login';
import DashBoard from './Components/DashBoard';
import TestQuizz from './Components/TestQuizz';
import { useGlobalContext } from './Content/AppProvider'
import setAuthToken from './utils/setAuthToken';
import jwt_decode from "jwt-decode";
import './App.css';
import { useDashBoardContext } from './Content/DashBoardProvider';
import ModalResult from './Components/ModalResult';

export const App = () => {
  const{isModalLanch}= useDashBoardContext();
  const {type} = isModalLanch;
  const {state,dispatchInUser,navigateInDashboard}= useGlobalContext();
  const logginUser = localStorage.getItem('jwtToken');
  useEffect(()=>{
    if(logginUser){
        const token = localStorage.jwtToken
        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatchInUser(decoded);
        navigateInDashboard(`/dashboard/${state.auth.user.id}`);
       
      }
    },[state.auth.isAuthenticated,logginUser])

  return (
        <Routes>
          <Route exact path='/' element={<Root/>}></Route>
          <Route path='/login' exact element={<Login/>}></Route>
          <Route path='Signin' exact element = {<Signin/>}></Route>
          <Route path={`/dashboard/${state.auth.user.id}`} exact element = {<DashBoard/>}></Route>
          <Route path={`/dashboard/${state.auth.user.id}/test=${type}`} exact element = {<TestQuizz/>}></Route>
          <Route path={`/dashboard/${state.auth.user.id}/test=${type}/result`} exact element = {<ModalResult/>}></Route>
        </Routes>
  )
}
export default App;