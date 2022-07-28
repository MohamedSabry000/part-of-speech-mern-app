import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Buttons({types, onButtonClick}) {
  return (
    <div className="box-container">
      {
        types.current.map(type => (
          <Box className="box-content" onClick={() => onButtonClick(type)}>
            <Typography variant="body1">{type}</Typography>
          </Box>
        ))
      }
    </div>
  )
}
