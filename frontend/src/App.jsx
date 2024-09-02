import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Verify from "./pages/auth/Verify";
import About from "./pages/about/About";
import Account from "./pages/account/Account";
import { UserData } from "./context/UserContext"; 
import Courses from './pages/cources/Courses';

const App = () => {
  const { isAuth } = UserData();
  return (
    <div>
      <BrowserRouter>
          <Header isAuth={isAuth}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/account" element={<Account/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify" element={<Verify />} />
          </Routes> 
          <Footer/> 
        </BrowserRouter>
    </div>
  )
}

export default App
