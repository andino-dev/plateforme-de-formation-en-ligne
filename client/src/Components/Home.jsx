import React,{useEffect,useState} from 'react'
import dataSlider from '../data/imageSlide'
import { Element } from 'react-scroll';
import Slide from './Slide'
function Home() {
  const[index,setIndex] = useState(0);

  useEffect(()=>{
    const timeout = setInterval(()=>{
         setIndex(oldIndex=>{
           let index = oldIndex +1;
           if(index > dataSlider.length -1){
               index = 0;
           }
           return index;
           
         });
    },6000);
    return ()=> clearInterval(timeout);
  },[index]);



  return (
    <Element id="home" name="home">
        <div className='body-content'>
          <div className="slide">
          {dataSlider.map((slide,slideIndex)=>{
            return <Slide key= {slide.id} {...slide} slideIndex={slideIndex} index={index} data = {dataSlider}></Slide>
          })}
          </div>
        </div>
    </Element>
  )
}

export default Home