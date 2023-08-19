
import React from 'react'
import "./Card.css"
import CardTitle from './../cardTitle/CardTitle';
import CardImage from '../cardImage/CardImage';
import CardInfo from '../cardInfo/CardInfo';

const Card = () => {
  return (
    <div className='card'>
     <div className='card-body'>
<CardTitle/>
<CardImage/>
<CardInfo/>



     </div>   
        </div>
  )
}

export default Card