import React from 'react';
import {FaCrown,FaPencilRuler,} from 'react-icons/fa';

function Card(props) {
    const {id,title,price,description} = props.cardItem;
    console.log(props)
    console.log(price.slice(0,3));
  return (
    <div className='card-course animated flipInY'>
        <div className='card-content-course'>
           <h1 className={`title-card ${id}`}>{title}</h1>
           <h3 className="price-course"><FaCrown className='cash'/><span>{price.slice(0,3)}</span><span className='first-child'>{price.slice(3,price.length)}</span><span className='month'>per month</span></h3>
           <p className='description-course'>{description}</p>
           <button className="button-class" >Go to Class<FaPencilRuler className='ruler'/></button>
        </div>
    </div>
  )
}

export default Card