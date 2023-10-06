import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Add_Page from './Pages/Add_Page'
import Contact from './Pages/Contact'
import Navbar from './Layouts/Navbar'
import './App.css'
import Protected from './Routes/Protected'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {isLoggedIn ? (<button onClick={()=> {setIsLoggedIn(!isLoggedIn)}}>LogOut</button>):(<button onClick={()=>setIsLoggedIn(!isLoggedIn)}>LogIn</button>)}
        <Routes>
          <Route path='/' element = {<Home />}></Route>
          <Route path='/add_page' element = {<Protected isLoggedIn={isLoggedIn}><Add_Page /></Protected>}></Route>
          <Route path='/contact' element = {<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App