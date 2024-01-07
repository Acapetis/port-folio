import { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

import './App.css'
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Home from "./components/Home"

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div class="bg-brown">
      
      
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='portfolio' element={<Portfolio/>} />
          <Route path='home' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
