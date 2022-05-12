import React from "react";
import {useState, useEffect} from "react";
import Landing from "../../components/Landing/Landing";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/CourseCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import { useNavigate } from "react-router-dom";
import { Grid } from "../../lib/style/generalStyles";
import coursesMock from "../../lib/style/mock/courses";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loading from "../../components/Loader/Loading";


const Home = () => {
    const buttonLink = useNavigate ();
    const [courses, setCourses] = useState(null);
    const [isSearchDisabled, setIsSearchDisabled] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [searchTerm, setSearch] = useState("");
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        console.log({courses})
        setTimeout(() => {
            setCourses(coursesMock);
            setLoading(false);
        }, 
      1000);
      },
      [],
    );

    const handleSearch = (key, val) => {
        setSearch(val.toLowerCase());
      };
    
    if(loading===true){
        return <Loading />
    }else{
      return (
        <>
          
    <Main>
        
        <section> 
        <Landing/>
        </section>

        <SearchBar 
         value={searchTerm}
         placeholder="Search..."
         isSearchDisabled={isSearchDisabled} 
         keyVal={"searchTerm"}
         handleValues={handleSearch} />

        <Section
        actionText={"Learn something new"}
        title={"Open new possibilities"}
        buttonText={"More Courses"}
        buttonLink={() => buttonLink("/Courses")} 
        > 


<Grid>
     {
     courses?.filter((course) => {
        if (searchTerm == null) {
          return course;
        } else if (course.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return course;
        }
     }).map((course) => {
        return  <CourseCard
        key={course.id}
        courseId={course.id}
         imgSrc={course.imgSrc}
         imgAlt={course.imgAlt}
         title={course.title}
         subtitle={course.subtitle}
              />
      })
         }
      </Grid>
        </Section>

        <Section isHeadingVisible={false}
         modifiers={['testimonials']}> <Testimonial/>  
         
         </Section>

    </Main>

        </>
      )
    }

    

};

export default Home;



