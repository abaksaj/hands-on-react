import './App.scss';
import Home from "./pages/Home/Home";
import Courses from './pages/Courses/Courses';
import Course from "./pages/Course/Course";
import {Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Register from './pages/Register/Register';
import SignIn from './pages/Signin/SignIn';

function App() {
  return ( 
  <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/course/:id" element={<Course/>}/>
      <Route path="/register" element={<Register/>}/> 
      <Route path="/sign-in" element={<SignIn/>}/> 
    </Routes>
  </>);
};

export default App;
