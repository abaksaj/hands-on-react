import React from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import LectureImg1 from "../../assets/images/lecture-1.jpg";
import SingleCourse from "../../components/SingleCourse/SingleCourse";
import { useNavigate} from "react-router-dom";


const Course = () => {
    const alert=useNavigate()
    return (
        <>
        <Header modifiers={['Secondary']} />
        <Main>
            <Section 
            actionText={"60 + Minutes"}
            title={"1.Introduction"}
            buttonText={"Back"}
            buttonLink={()=>alert(-1)}
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
    

export default Course;



