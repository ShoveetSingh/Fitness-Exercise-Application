import { useEffect,useState } from "react"
import React from 'react'
import { Box,Button,Stack,TextField,Typography } from "@mui/material"
import { exerciseOptions,fetchData } from "../utils/fetchData"
import HorizontalScrollBar from "./HorizontalScrollBar"

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {

   const [search,setsearch]=useState('');
   const [bodyParts, setBodyParts] = useState([]);

   useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

   const handlechange = async()=>{
       if(search){
        const exercisedata = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`,exerciseOptions);
        console.log(exercisedata);
        const searchedExercises = exercisedata.filter( 
          (exercise) => exercise.name.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)
        );
         setsearch('');
         setExercises(searchedExercises);

       }
   }

  return (
      <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
         <Typography fontWeight={700} sx={{
          fontsize:{lg:'44px', xs:'30px'}}}
          mb="50px" textAlign="center">
            Awesome Exercises You <br/> Should Know
          </Typography>
          <Box position ="relative" mb="72px"  >
            <TextField
            sx={{
                  input:{
                    fontWeight:'700',
                    border:'none',
                    borderRadius:'4px',
                    display:"flex",
                    justifyContent:"center"
                  },
                  width:{lg:'400px', xs:'350px'}
            }}
            height="760px"
            value={search}
            onChange={(e)=>setsearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type="text"
            />
          
          <Button className="search-btn"
          sx={{
            bgcolor:'#FF2625',
            color:'#fff', 
            textTransform:'none',
            width:{lg:'175px',xs:'80px'},
            fontSize:{lg:'20px',xs:'14px'  },
            height:"56px",
            position:'absolute',
            right:'1',
          }}
          onClick={handlechange}
          >
            Search
          </Button>
          </Box>
          <Box sx={{position:'relative',width:'100%',p:'20px'}}>
          <HorizontalScrollBar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
          </Box>
      </Stack>
    
  )
}

export default SearchExercises
