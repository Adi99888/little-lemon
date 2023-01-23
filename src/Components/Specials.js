import React from 'react'
import Img2 from '../assets/greek salad.jpg'
import Img3 from '../assets/bruchetta.jpg'
import Img4 from '../assets/dessert.jpg'
import Img5 from '../assets/fooddelivery.svg'

function Specials() {
  return (
    <>
      <div className="specials">
        <div className="heading">
          <div className="special-heading"><h2>This Weeks Specials !</h2></div>
          <div className="special-btn"><button>Online Menu</button></div>
        </div>
        <div className="items">
          <div className="item">
            <img src={Img2} alt='error'/>
            
            <h2>Greek salad</h2>
            
            <p className='price'>$ 12.99</p>
            
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style cheese, garnished with crunchy garlic and rosemary croutons. </p>
            <button>Order a delivery &nbsp; <img src={Img5} alt="error" /></button>
          </div>
          <div className="item">
          <img src={Img3} alt='error'/>
          <h2>Bruchetta</h2>

          <p className='price'>$ 5.99</p>

            
            <p>Our Bruschetta is made from grilled bread that has been smeared with  &nbsp;  garlic and seasoned with salt and &nbsp;  olive  oil .  </p>
            <button>Order a delivery &nbsp; <img src={Img5} alt="error" /></button>
          </div>
          <div className="item">
          <img src={Img4} alt='error'/>
          <h2>Lemon Dessert</h2>
            
           <p className='price'>$ 5.00</p>
            
            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </p>
            <button>Order a delivery  &nbsp; <img src={Img5} alt="error" /></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Specials
