import './App.scss';
import Home from "./pages/Home/Home";
import Courses from './pages/Courses/Courses';
import Course from "./pages/Course/Course";
import {Routes, Route} from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";


function App() {
  return  <>
  
  <Routes>

  <Route path="/" element={<Home/>} />

  <Route path="/Courses" element={<Courses/>} />

  <Route path="/Course/:id" element={<Course/>} />
  

  </Routes>

  </>;
   
};

export default App;
