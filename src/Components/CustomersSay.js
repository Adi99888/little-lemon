import React from 'react'
import Img5 from '../assets/profileicon.png'
function CustomersSay() {
  return (
    <>
      <div className="user-testimonials">
        <div><h1>What do our user say?</h1></div>
        <div className="user-reviews">
          <div className="user-review">
            <div className="user-rating"><p>Ratings</p></div>
            <div className='user-img'>
              <img src={Img5} alt="error" />
            </div>
            <div className="user-name"><p>Name</p></div>
            <div className="review-text"><p>"Lorem ipsum dolor amet."</p></div>
          </div>
          <div className="user-review"><div className="user-rating"><p>Ratings</p></div>
            <div className='user-img'>
              <img src={Img5} alt="error" />
            </div>
            <div className="user-name"><p>Name</p></div>
            <div className="review-text"><p>"Lorem ipsum dolor amet."</p></div></div>
          <div className="user-review"><div className="user-rating"><p>Ratings</p></div>
            <div className='user-img'>
              <img src={Img5} alt="error" />
            </div>
            <div className="user-name"><p>Name</p></div>
            <div className="review-text"><p>"Lorem ipsum dolor amet."</p></div></div>
          <div className="user-review"><div className="user-rating"><p>Ratings</p></div>
            <div className='user-img'>
              <img src={Img5} alt="error" />
            </div>
            <div className="user-name"><p>Name</p></div>
            <div className="review-text"><p>"Lorem ipsum dolor amet."</p></div></div>
        </div>
      </div>
    </>
  )
}

export default CustomersSay
