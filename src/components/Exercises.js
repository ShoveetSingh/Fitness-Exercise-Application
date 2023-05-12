import React,{useEffect,useState} from 'react'
import  Pagination  from '@mui/material/Pagination'
import {Box,Stack,Typography} from '@mui/material/'
import ExCard from './ExCard'

import {exerciseOptions, fetchData} from '../utils/fetchData'


const Exercises = ({exercises,setExercises,bodyPart}) => {
  const [currentPage,setcurrentPage] = useState(1);
  const exercisesPerPage = 9;

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart,setExercises]);


  const indexoflastex=currentPage*exercisesPerPage;
  const indexoffirstex=indexoflastex-exercisesPerPage;
  const currentExercises = Array.isArray(exercises) ? exercises?.slice(indexoffirstex, indexoflastex) : [];

  //const currentExercises = exercises.slice(indexoffirstex,indexoflastex);



  const paginate = (e,value) =>{
    setcurrentPage(value);
    window.scrollTo({top:4200,behaviour:'smooth'})
  }

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
    <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
    <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
    {currentExercises.map((exercise,index) =>(
      <ExCard exercise={exercise}/>
    ))}
    </Stack>
    <Stack mt="100px" alignItems="center">
          {exercises.length>9 &&(
            <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length/exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
            />
          )}
    </Stack>
    </Box>
  )
}

export default Exercises