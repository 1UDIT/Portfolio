import './App.css';
import Home from './Component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './Component/Navbar';
import { Routes, BrowserRouter, Route } from "react-router-dom"
import Project from './Component/Project';
import Skill from './Component/Skill';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" exact element={<Home />} />
        <Route path="/Project" exact element={<Project />} />
        <Route path="/Skill" exact element={<Skill />} />
        {/* </Route> */}
      </Routes>
    </>
  )
}



export default App;
