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
    const [searchTerm, setSearch] = useState("");
    const [isSearchDisabled, setIsSearchDisabled] = useState(false);
    const [courses, setCourses] = useState(null);
    const handleSearch = (key, val) => {
        setSearch(val.toLowerCase());
      };


    const [allCourses,setAllCourses] = useState();
    useEffect(() => {
        setTimeout(settingCourse,1000)
        

        function settingCourse(){
            setAllCourses(coursesMock);
            setLoading(false);

        }
    }, [])

    

    if(loading===true){
        return <Loading />
    }else{ 

        return (
            <>
            <Header isSecondary={true} />
            <Main>
            <SearchBar 
         value={searchTerm}
         placeholder="Search..."
         isSearchDisabled={isSearchDisabled} 
         keyVal={"searchTerm"}
         handleValues={handleSearch} />
                <Section 
                title={"All Lectures"}>
                    
                <Grid>
    
                {
                 allCourses?.filter((course) => {
        if (searchTerm == null) {
          return course;
        } else if (course.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return course;
        }
     }).map((item)=>(
    
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
            </Main>
    
            </>
        );
        };
};

export default Courses;