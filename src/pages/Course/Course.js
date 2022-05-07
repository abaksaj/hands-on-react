import React from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import LectureImg1 from "../../assets/images/lecture-1.jpg";
import SingleCourse from "../../components/SingleCourse/SingleCourse";
import { useNavigate, useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import coursesMock from "../../lib/mock/courses";



const Course = () => {
    const {id} = useParams();
    const [courses, setCourses] = useState(null);
    const [course, setCourse] = useState(null);

    useEffect(() => {
        setCourses(coursesMock);
        }, []);
     
    useEffect(() => {
        courses && setCourse(...courses.filter((course) => course.id === parseInt(id) ));
        }, [courses, id]);

    const alert=useNavigate();

    const handleButtonClick = () => {

    };

    return (
        <>
        <Header isSecondary={true} />

        {course && (
            <Section 
            actionText={course.subtitle}
            title={course.title}
            buttonText={"Back"}
            //how to implement back button at course page? with callbak or useNavigate?
            callback={handleButtonClick}
            buttonLink={()=>alert(-1)}
            >

            <SingleCourse 
            
            imgSrc={course.imgSrc}
            imgAlt={course.imgAlt}
            />
            
            </Section>)

        }

        {/* <Main>
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
            
        </Main> */}
        </>
    );
};
    

export default Course;



