import React from 'react'
const Slide = (props)=>{
    const {title,src,subscription,slideIndex,index,data}= props;

    let position = "nextSlide";
    if(slideIndex===index){
         position="activeSlide";
    }
    if( slideIndex===index-1||(index === 0 && slideIndex=== data.length - 1 )){
        position = "prevSlide";
    }
    return(
    <article className={position}>
      <div className="container">
            <img src={src} alt={title} className="image-slider"></img>
            <div className='text-container'>
              <div className='content'>
               <h5 className="name animated slideInDown">best online courses</h5>
               <h1 className="slide-title animated slideInDown">{title}</h1>
               <p className="slide-subscription">{subscription}</p>  
               <div className='animated slideInRight'>
               <a className="btn-to-signin " href="http://localhost:3000/Signin">Join now</a> 
               </div>  
              </div> 
            </div>  
      </div>
    </article> 
    )
}
export default Slide;