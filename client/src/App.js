import { Routes, Route } from "react-router-dom";

import "./styles/app.css";
import './styles/colors.css'

import About from "./components/about/About";
import Admin from "./components/admin/Admin";
import Historic from "./components/historic/Historic";
import Home from "./components/home/Home";
import Rewards from "./components/rewards/Rewards";
import Settings from "./components/settings/Settings";
import TodoList from "./components/todoList/TodoList";
import NotFound from "./components/NotFound";
import Menu from "./components/Menu";
import Profil from "./components/profil/Profil";
import Header from "./components/Header";
import Login from './components/login/Login'

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
