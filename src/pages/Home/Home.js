import React from "react";
import {useState, useEffect} from "react";
import Header from "../../components/Header/Header";
import Landing from "../../components/Landing/Landing";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/CourseCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import { useNavigate } from "react-router-dom";
import { Grid } from "../../lib/style/generalStyles";
import coursesMock from "../../lib/style/mock/courses";
import SearchBar from "../../components/SearchBar/SearchBar";


const Home = () => {
    const buttonLink = useNavigate ();
    const [courses, setCourses] = useState(null);
    const [isSearchDisabled, setIsSearchDisabled] = useState(false);
    const [inputValue, setInputValue] = useState('');
    
    useEffect(() => {
        console.log({courses})
        setTimeout(() => {
            setCourses(coursesMock);
        }, 1000);
      },
      [],
    );
    
    return (
    <>
    <Header />
    <Main>
        
        <section> 
        <Landing/>
        </section>
        <SearchBar placeholder="Search..." isSearchDisabled={isSearchDisabled} inputValue={inputValue} setInputValue={setInputValue} />
        <Section
        actionText={"Learn something new"}
        title={"Open new possibilities"}
        buttonText={"More Courses"}
        buttonLink={() => buttonLink("/Courses")} 
        > 

        {
            courses && (
            <Grid>
            {
               courses.map((course, index) => index <= 3 && 
               <CourseCard
                    key={course.id}
                    courseId={course.id}
                     imgSrc={course.imgSrc}
                     imgAlt={course.imgAlt}
                     title={course.title}
                     subtitle={course.subtitle}
                /> ) 
            }

            </Grid> 
        )}

        </Section>

        <Section isHeadingVisible={false}
         modifiers={['testimonials']}> <Testimonial/>  
         
         </Section>

    </Main>
        
    </>
    );

};

export default Home;
