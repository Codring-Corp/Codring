import { Routes, Route } from "react-router-dom";

import "./styles/app.css";
import './styles/colors.css'

import Menu from "./components/Menu";
import Header from './components/Header'

import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import About from "./components/pages/About";
import Admin from "./components/pages/About";
import Historic from "./components/pages/Historic";
import Rewards from "./components/pages/Rewards";
import Settings from "./components/pages/About";
import TodoList from "./components/pages/TodoList";
import Profil from "./components/pages/Profil";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div className="App">
        <Menu />
      <div className='headerAndComponent'>
        <Header />
        <div className='componentContainer'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/historic" element={<Historic />} />
                <Route path="/rewards" element={<Rewards />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/todo" element={<TodoList />} />
                <Route path="/profil/:userId" element={<Profil />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
      
      </div>
    </div>
  );
}

export default App;
