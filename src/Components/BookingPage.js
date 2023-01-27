import React from 'react'
import BookingForm from './BookingForm'

function BookingPage() {
  
  
  
  function getAvailableTimes(availableTimes){
    console.log(availableTimes)
  }

 
  return (
    
    <>
      <BookingForm getAvailableTimes={getAvailableTimes}/>
    </>
  )
}

export default BookingPage
