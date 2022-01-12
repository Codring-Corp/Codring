import "./styles/app.css";
import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
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
  );
}

export default App;
