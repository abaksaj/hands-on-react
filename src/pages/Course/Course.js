import React from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import Header from "../../components/Header/Header";
import Grid from "../../components/Grid/Grid";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import LectureImg1 from "../../assets/images/lecture-1.jpg";
import SingleCourse from "../../components/SingleCourse/SingleCourse";




const Courses = () => {
    return (
        <>
        <Header modifiers={['Secondary']} />
        <Main>
            <Section 
            actionText={"60 + Minutes"}
            title={"1.Introduction"}
            buttonText={"Back"}
            >

<SingleCourse 
            
            imgSrc={LectureImg1}
            imgAlt={"image"}

            />


            </Section>
            
        </Main>





        
        
        
        
        
        </>
    );
};
    

export default Courses;



