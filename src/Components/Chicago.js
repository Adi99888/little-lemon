import React from "react";
import Img6 from '../assets/restaurant.jpg'

function Chicago() {
  return (
    <>
      <div className="container">
        <div className="about-us">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.{" "}
          </p>
        </div>{" "}
        <div className="about-img"> 
        
        <img src={Img6} alt="error" />
        </div>
      </div>
    </>
  );
}

export default Chicago;
