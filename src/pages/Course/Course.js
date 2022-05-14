import React from "react";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import SingleCourse from "../../components/SingleCourse/SingleCourse";
import { useNavigate, useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import coursesMock from "../../lib/style/mock/courses";

const Course = () => {
    const {id} = useParams();
    const [courses, setCourses] = useState(null);
    const [course, setCourse] = useState(null);

    useEffect(() => {
        setCourses(coursesMock);
    }, []);
     
    useEffect(() => {
        courses && setCourse(...courses.filter((course) => course.id === parseInt(id)));
    }, [courses, id]);

    const router=useNavigate();
    const handleButtonClick = () => {
     router("/") 
    };

    return (
        <>
        <Header isSecondary={true} />
        {course && (
            <Section 
            actionText={course.subtitle}
            title={course.title}
            buttonText={"Back"}
            onClick={handleButtonClick}
            navigate={router}
            >
            <SingleCourse 
            imgSrc={course.imgSrc}
            imgAlt={course.imgAlt}
            />
            </Section>
            )
        }
        </>
    );
};
    
export default Course;



