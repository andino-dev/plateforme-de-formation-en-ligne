import React ,{useContext,useState}from "react";
import { useNavigate } from "react-router-dom";
import { dataDashBoard } from "../data/dashboardData";
import { useGlobalContext } from "./AppProvider";
const DashBoardContext = React.createContext();
export const useDashBoardContext = ()=>{
    return useContext(DashBoardContext);
}

function DashBoardProvider({children}) {
    const[width,setWidth] = useState(0);
    const [isModalResult,setIsModalResult] = useState(false);
    const [timer,setTimer] = useState(75000);
    const {state} = useGlobalContext();
    const [index,setIndex] = useState(0);
    const [correct,setCorrect] = useState(0);
    const [data,setData] = useState([]);
    const [isModalLanch,setIsModalLanch] = useState({
        value:false,
        type:''
    });
    let navigate = useNavigate();
    const modalLanch = (type)=>{
        return setIsModalLanch({
            value:true,
            type:type
        });
    }
    const showModalResult=()=>{
          setIsModalResult(true);
          navigate(`/dashboard/${state.auth.user.id}/test=${isModalLanch.type}/result`);
 
    }
    const launchTest =(e,value)=>{
        e.preventDefault();
        const type = `${value}`;
      if(type ==="html"){
        setData(dataDashBoard['html']);
      }
      else if(type ==="javascript"){
          setData(dataDashBoard['javascript']);
      }
      else if (type ==="css") {
        setData(dataDashBoard['css']);
      } 

      navigate(`/dashboard/${state.auth.user.id}/test=${type}`);
    }
    const nextQuestions = ()=>{
      setIndex((oldIndex)=>{
          const index = oldIndex +1 ;
          if(index>data.length-1){
              showModalResult();
              return 0;
          }else{
              return index;
          }
      });
      setTimer(75000);
      setWidth(0);
    }
    const checkAnswer = (value)=>{
        if(value){
            setCorrect((old)=>{
                return old + 1;
            });
        }
        nextQuestions();
        setWidth(0);
    }
    const closeModal = ()=>{
        return setIsModalLanch({
            value:false,
            type:""
        })
    }
  return (
    <DashBoardContext.Provider value={{
        isModalResult,
        width,
        setWidth,
        data,
        timer,
        setTimer,
        index,
        correct,
        isModalLanch,
        nextQuestions,
        checkAnswer,
        launchTest,
        modalLanch,
        closeModal,
        setIsModalLanch
    }}>
     {children}
    </DashBoardContext.Provider>
  )
}

export default DashBoardProvider;