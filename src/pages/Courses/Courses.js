import React from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import Header from "../../components/Header/Header";
import Grid from "../../components/Grid/Grid";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import LectureImg1 from "../../assets/images/lecture-1.jpg";




const Courses = () => {
    return (
        <>
        <Header modifiers={['Secondary']} />
        <Main>
            <Section 
            actionText={"Learn something new"}
            title={"All Lectures"}
            
            >

            <Grid>
                <CourseCard 
                imgSrc={LectureImg1}
                imgAlt={"Introduction"}
                title={"1.Introduction"}
                subtitle={"60 Minutes"}
                />

<CourseCard 
                imgSrc={LectureImg1}
                imgAlt={"Introduction"}
                title={"1.Introduction"}
                subtitle={"60 Minutes"}
                />

            </Grid>
            </Section>
        </Main>





        
        
        
        
        
        </>
    );
};
    

export default Courses;



