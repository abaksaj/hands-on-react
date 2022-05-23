import './App.scss';
import Home from "./pages/Home/Home";
import Courses from './pages/Courses/Courses';
import Course from "./pages/Course/Course";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
  
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/Courses" element={<Courses/>}/>
    <Route path="/Course" element={<Course/>}/>
    </Routes>
  );
};

export default App;
