import React from "react";
import { useState } from "react";




const formStyle={
    display: 'grid',
    maxWidth: '400px', 
    gap: '20px',
    fontSize:'25px',
    marginLeft:'20px'
}
function BookingForm(props) {

    const [availableTimes,setAvailableTimes]=useState('17:00');
    const [date ,setDate]=useState('');
    const [guests,setGuests]=useState('1');
    const [occasion,setOccasion]=useState('occasion');

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.getAvailableTimes(availableTimes);
        console.log('reservation is made');
        setDate('')
        }
  return (
    <>
      <form style={formStyle} onSubmit={handleSubmit}> 
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={(e)=>setDate(e.target.value)} required/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time " value={availableTimes} onChange={(e)=>setAvailableTimes(e.target.value)} required>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e)=>setGuests(e.target.value)} required/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e)=>setOccasion(e.target.value)} required>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" disabled={!date}/>
      </form>
    </>
  );
}

export default BookingForm;
