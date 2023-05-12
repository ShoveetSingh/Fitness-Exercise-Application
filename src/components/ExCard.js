import React from 'react'
import { Link } from 'react-router-dom'
import { Button,SliderTrack,Stack,Typography } from '@mui/material'

const ExCard = ({exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <Stack direction = "row">
     <img src={exercise.gifUrl} alt =  {exercise.name} loading="lazy"/>
     </Stack>
     <Stack direction = "row">
     <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.bodyPart}
      </Button>
      <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
     </Stack>
     <Typography  ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
        {exercise.name}
      </Typography>
    </Link>
  )
}

export default ExCard