import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { ImSad,ImGift} from 'react-icons/im';
import { useDashBoardContext } from '../Content/DashBoardProvider';
import { useGlobalContext } from '../Content/AppProvider';
import '../Css/modalResult.css';
function ModalResult() {
    const {isModalResult,correct,data,isModalLanch,setIsModalLanch}= useDashBoardContext();
    const {state} = useGlobalContext();
    let navigate = useNavigate();
    const [result,setResult] = useState({
        value:'',
        rank:''
    });
    let resultPorcent = Math.round((correct*100)/data.length);

    useEffect(() => {
        if(resultPorcent<70){
            setResult({
                value:"Navré,vous avez echoué",
                rank: "Au dessous de la tranche des < 70%"
            });
          }
        if(resultPorcent>70){
              setResult({
                  value:"Beau travail,vous avez reussi",
                  rank: "Au dessus de la tranche des > 70%"
              });
          }
    }, [resultPorcent]);

    const returnOnprofile = ()=>{
       navigate(`/dashboard/${state.auth.user.id}`);
       setIsModalLanch({
        value:false,
        type:''
      })
    }
        return (
         <div className={`${isModalResult}?"result-component is-show":"result-component"`}>
             <div className="evaluation-result">
                 <div className='evaluation-result-modal'>
                  <h1 className='evaluation-title'>Evaluation  en {isModalLanch.type} </h1>
                  <div className="result-modal-content">
                     <FaCheck className='icons-result'/>
                     <div className="title-result-content">
                       <h3 className='result-title-value'>{result.value}</h3>
                       <h4 className='result-title-rank'>{result.rank}</h4>
                     </div>
                     {resultPorcent<70? <ImSad className='ImCrying2'/>:<ImGift className='ImGift'/>}
                 </div>
                 <button className='button-return-profil' onClick={returnOnprofile}>Retour au profil</button>
             </div>
             </div>
         </div>
          )
    }


export default ModalResult