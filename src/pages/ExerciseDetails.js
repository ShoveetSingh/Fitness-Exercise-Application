import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'

import {exerciseOptions,fetchData,youtubeOptions} from '../utils/fetchData'

import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetails = () => {
  const [exerciseDetail,setExerciseDetail] = useState({});
  const [exerciseVideos,setExerciseVideos] = useState([]);
  const [mus,setmus] = useState([]);
  const [equipment,setequipment] = useState([]);
  const {id} = useParams();

   useEffect (()=>{  
    const fetchExerciseData = async()=>{
    const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
    const utubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);
    setExerciseDetail(exerciseDetailData)
    const exerciseVideosData = await fetchData(`${utubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
    setExerciseVideos(exerciseVideosData.contents);
    const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions);
    setmus( targetMuscleExercisesData );
    const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions);
    setequipment(equipmentExercisesData); 
    }  
    fetchExerciseData();  
  },[id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises mus={mus} equipment={equipment}/> 
    </Box>
  )
}

export default ExerciseDetails