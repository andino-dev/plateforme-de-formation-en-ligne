import React from 'react';
import {Element} from 'react-scroll';
import Card from './Card';
import '../Css/courses.css';
import cardCourses from '../data/cardCourses';
function Courses() {
  return (
    <Element  className="courses" id='courses' name="courses">
        <div className='courses-content '>
             <h5 className='courses-name text-start-courses'>Courses</h5>
             <div className='courses-content-dash'>
                 <h1 className='title-welcome-courses '>Learn Courses Section</h1>
                 <div className='section-courses flex'>
                   {cardCourses.map((cardItem,index)=>{
                     return <Card  key={index} cardItem={cardItem}/>
                   })}
                 </div>
             </div>
        </div>
    </Element>
  )
}

export default Courses