import { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import humanizeDuration from "humanize-duration";
// import axios from 'axios'

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    // const navigate = useNavigate();

    //Fetch all course
    // const fetchAllCourses = async ()=>
    // {
    //     try {
    //         const {data} = await axios.get(backendUrl + "/api/course/all")
    //         if(data.success)
    //         {
    //             setAllCourse(data.courses)
    //         }else
    //         {
    //             toast.error(data.message)
    //         }
    //     } catch (error) {
    //         toast.error(error.message)
    //     }
    // }

    // useEffect(()=>{
    //     fetchAllCourses()
       
    // },[])

    // useEffect(() => {
    //     if(user)
    //     {
    //         fetchUserData()
    //         fetchEnrolledCourses()
    //     }
    // },[user])

    // const value = {
    //     currency,allCourses,navigate,calculateRating,isEducator,setIsEducator,
    //     calculateNoOfLectures,calculateCourseDuration,calculateChapterTime,enrolledCourses,
    //     fetchEnrolledCourses,backendUrl,userData, setUserData, getToken, fetchAllCourses
    // }

    const percentile_result = null;
    const rank_result = null;

    const value = {percentile_result, rank_result};
   
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
}
