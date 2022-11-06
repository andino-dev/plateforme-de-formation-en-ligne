import isEmpty from "is-empty";
import { SET_CURRENT_USER,USER_LOADING } from "../actions/types";

 export default function authReducers(state,action){
     switch(action.type){
         case SET_CURRENT_USER:
             return{
                 ...state,
                 isAuthenticated: !isEmpty(action.payload),
                 user:action.payload
             }
         case USER_LOADING:
             return{
                 ...state,
                 loading:true
             }
         default:
             return state;    

     }
 }