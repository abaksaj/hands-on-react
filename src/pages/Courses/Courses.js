import React,{useState,useEffect} from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import SearchBar  from '../../components/SearchBar/SearchBar';
import { Grid } from "../../lib/style/generalStyles";
import coursesMock from "../../lib/style/mock/courses";
import Loading from "../../components/Loader/Loading";


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
        return <Loading />
    }else{ 

        return (
            <>
            <Header isSecondary={true} />
            <Main>
                <Section 
                title={"All Lectures"}>
                    
                <Grid>
    
                    {allCourses && allCourses.map((item)=>(
    
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