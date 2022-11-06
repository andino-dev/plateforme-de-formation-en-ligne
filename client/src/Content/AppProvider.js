import React,{useContext,useReducer} from 'react';
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

/* --------------Reducer Component-----------------*/
import authReducers from '../reducers/authReducers';
import errorReducer from '../reducers/errorReducers';
import combineReducer from '../reducers/combineReducers';
import { GET_ERRORS } from '../actions/types';
/* --------------Reducer Component-----------------*/
import setAuthToken from "../utils/setAuthToken"
import { setCurrentUser } from '../utils/setCurrentUser';
const AppContext = React.createContext();

export const useGlobalContext=()=>{
  return useContext(AppContext);
}
 /* initialState*/
 const initialState = {
   auth:{
    isAuthenticated:false,
    user:{},
    loading:false
   },
   error:{}
 }
 /*initialState*/

export default function AppProvider ({children}){
  /* combine reducers authreducers and errorReducer */
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(combineReducer({
     auth:authReducers,
     error: errorReducer
   }), initialState);

 const fetchLogin = async(resData)=>{
    try{
      const response = await axios.post('http://localhost:8000/api/users/login',resData);
      const data =  await response.data;
      console.log(data);
          const {token} = data;
          localStorage.setItem("jwtToken",token);
          setAuthToken(token);
          const decode  = jwt_decode(token);
          dispatchInUser(decode);
          if(state.auth.isAuthenticated){
             navigate(`/dashboard/${state.auth.user.id}`);
          }
    }catch(err){
      const error = err.response.data;
      dispatch({type:GET_ERRORS,payload:error});
  }
}
console.log()
 const fetchRegister =  async(newUser) =>{
   try{
     const response = await axios.post("http://localhost:8000/api/users/register",newUser);
     if(response){
      navigate('/login');
     }
   }
   catch(err){
      console.log(err);
      dispatch({
        type:GET_ERRORS,
        payload:err.response.data
      })
    }
 }
 const logoutUser = ()=>{
   localStorage.removeItem('jwtToken');
   setAuthToken(false);
   dispatch(setCurrentUser({}));
   navigate('/');
 }
 const dispatchInUser = (decode)=>{
   return dispatch(setCurrentUser(decode));
 }
  const navigateInDashboard =(url)=>{
   return navigate(url);
 }
  
  return (
    <AppContext.Provider value={{
      fetchLogin,
      fetchRegister,
      state,
      dispatchInUser,
      navigateInDashboard,
      logoutUser
    }}>
      {children}
    </AppContext.Provider>
  )
}


