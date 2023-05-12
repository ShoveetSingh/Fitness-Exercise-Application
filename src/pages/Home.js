import React,{useState} from 'react'
import { Box } from '@mui/material'
import Herobanner from '../components/Herobanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  const [exercises,setExercises]=useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (
    <Box>
      <Herobanner/>
      <SearchExercises
        setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} 
      />
      <Exercises
        exercises = {exercises} setExercises={setExercises} bodyPart={bodyPart} 
      />
    </Box>
  )
}

export default Home