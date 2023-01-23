import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import HomePage from './Components/HomePage'
import Chicago from './Components/Chicago'
import BookingPage from './Components/BookingPage'
import Menu from './Components/Menu'



function App() {
  return (
    <>
      <Nav />
      
      <div>
        <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path='/about' element={<Chicago/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/reservation' element={<BookingPage/>}/>
            <Route path='/order-online' element={<BookingPage/>}/>
            <Route path='/login' element={<BookingPage/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
