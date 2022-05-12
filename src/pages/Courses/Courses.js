import React,{useState,useEffect} from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
// import LectureImg1 from "../../assets/images/lecture-1.jpg";
// import LectureImg2 from "../../assets/images/lecture-2.jpg";
// import LectureImg3 from "../../assets/images/lecture-3.jpg";
// import LectureImg4 from "../../assets/images/lecture-4.jpg";
// import LectureImg5 from "../../assets/images/lecture-5.jpg";
// import LectureImg6 from "../../assets/images/lecture-6.jpg";
// import LectureImg7 from "../../assets/images/lecture-7.jpg";
// import LectureImg8 from "../../assets/images/lecture-8.jpg";
import SearchBar  from '../../components/SearchBar/SearchBar';
import { Grid } from "../../lib/style/generalStyles";
import coursesMock from "../../lib/style/mock/courses";
import Loader from "../../components/Loader/Loader";



const Courses = () => {
    const [loading, setLoading] = useState(true);
    const [allCourses,setAllCourses] = useState();
    useEffect(() => {
        setTimeout(settingCourse,1000)
        

        function settingCourse(){
            setAllCourses(coursesMock);
            setLoading(false);

        }
      
    }, [])

    function handleSearch(){
        console.log("Handle Search");
    }
    

    if(loading===true){
        return <Loader />
    }else{ 

        return (
            <>
            <Header isSecondary={true} />
            <Main>
                <Section 
                actionText={"Learn something new"}
                title={"All Lectures"}>
                    
                <Grid>
    
                    {allCourses && allCourses.map((item,index)=>(
    
                    <CourseCard 
                    courseId={item.id}
                    imgSrc={item.imgSrc}
                    imgAlt={item.imgAlt}
                    title={item.title}
                    subtitle={item.subtitle}
                    />
                    ))}
    
                </Grid>
                </Section>
                    <SearchBar handleSearch={handleSearch}/>
            </Main>
    
            </>
        );
        };
};

export default Courses;