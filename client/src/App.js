import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import { request } from './request';

import Menu from "./components/Menu";
import Header from './components/Header'

import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import About from "./components/pages/About";
import Admin from "./components/pages/Admin";
import Profil from "./components/pages/Profil";
import Rewards from "./components/pages/Rewards";
import Historic from "./components/pages/Historic";
import Settings from "./components/pages/Settings";
import TodoList from "./components/pages/TodoList";
import NotFound from "./components/pages/NotFound";
import ResetPassword from "./components/pages/ResetPassword";

import './styles/colors.css'
import './styles/app.scss'
import './styles/loading.scss'
import './styles/home.scss'
import './styles/forms.scss'
import './styles/buttons.scss'

function App() {
  const token = localStorage.getItem('accessToken')
  
  const [isLoading, setIsLoading] = useState(true)
  const [isAuth, setIsAuth] = useState()
  const [user, setUser] = useState()
  
  useEffect(() => {
    const getUser = async() => {
      if (token) {
        const res = await request.get('/auth')
        if (res.status !== 200) setIsAuth(false)
        else {
          setUser(res.user)
          setIsAuth(true)
        }
      }
      
      else setIsAuth(false)
      setIsLoading(false)
    }
    getUser()
    
  }, [token])
  
  if (isLoading) return( <div className="App loading">Codring se réveille...</div> )
  
  return (
    <div className="App">
        <Menu />
      <div className='headerAndComponent'>
        <Header user={user} />
        <div className='componentContainer'>
            <Routes>
                <Route path="/" element={<Home user={user} isAuth={isAuth}/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About isAuth={isAuth}/>} />
                <Route path="/admin" element={<Admin isAuth={isAuth}/>} />
                <Route path="/historic" element={<Historic isAuth={isAuth}/>} />
                <Route path="/rewards" element={<Rewards isAuth={isAuth}/>} />
                <Route path="/settings" element={<Settings isAuth={isAuth}/>} />
                <Route path="/todo" element={<TodoList isAuth={isAuth}/>} />
                <Route path="/profil/:userId" element={<Profil isAuth={isAuth}/>} />
                <Route path="/reset/password/:token" element={<ResetPassword />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
      
      </div>
    </div>
  );
}

export default App;
