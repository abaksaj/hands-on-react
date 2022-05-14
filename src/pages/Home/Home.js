import React from "react";
import {useState, useEffect} from "react";
import Landing from "../../components/Landing/Landing";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/CourseCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import {useNavigate} from "react-router-dom";
import {Grid} from "../../lib/style/generalStyles";
import coursesMock from "../../lib/style/mock/courses";
import Loading from "../../components/Loader/Loading";


const Home = () => {
    const buttonLink = useNavigate ();
    const [courses, setCourses] = useState(null);
    const [setLoading] = useState(true);

    useEffect(() => {
        console.log({courses})
        setTimeout(() => {
          setCourses(coursesMock);
          setLoading(false);
        }, 
      1000);
    },[],);

  return (
    <>   
    <Main>
    <section> 
    <Landing/>
    </section>
    <Section
      actionText={"Learn something new"}
      title={"Open new possibilities"}
      buttonText={"More Courses"}
      buttonLink={() => buttonLink("/Courses")}> 

    {courses ? "": <Loading/>}
    <Grid>
     
    {courses && courses.map((course) => {
      return <CourseCard
        key={course.id}
        courseId={course.id}
        imgSrc={course.imgSrc}
        imgAlt={course.imgAlt}
        title={course.title}
        subtitle={course.subtitle}/>
      })
    }
    </Grid>
    </Section>
    <Section isHeadingVisible={false} isTestimonials> <Testimonial/>  
    </Section>
    </Main>
    </>
    )
};

export default Home;



