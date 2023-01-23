import React from 'react'
import Img1 from '../assets/Logo.svg'
import {Link} from 'react-router-dom'
// import Homepage from './Homepage'

function Nav() {
  return (
    <>
      <div className="navigation">
        <div className="nav-img">
          <img src={Img1} alt='error'/>

        </div>
        <div className="nav-links">
          <nav>
            <ul>
            <li ><Link to="/" className='links'>Home</Link></li>
            <li><Link to="/about" className='links'>About</Link></li> 
            <li><Link to="/menu" className='links' >Menu</Link> </li>
            <li><Link to="/reservation" className='links'>Reservation</Link></li>
            <li><Link to="/order-online" className='links'>Order Online</Link></li>
            <li><Link to="/login"className='links' >Login</Link></li> 
            </ul>
          </nav>
          
        </div>
      </div>
    </>
  )
}

export default Nav
