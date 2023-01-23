import React from 'react'
import Img1 from '../assets/restauranfood.jpg'

function Hero() {
  return (
    <>
      <div className="hero">
      <div className="intro">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are family owned
        Mediterranean Restaurant, 
        foused on traditional
        recipes served with a modern
        twist.</p>
        <button>Reserve a Table</button>
      </div>
      <div className="intro-img">
        <img  src={Img1} alt='error'/>
      </div>
      </div>
      
      
    </>
  )
}

export default Hero
