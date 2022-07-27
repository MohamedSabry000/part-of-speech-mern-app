import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import './buttons-container.css';

export default function ButtonsContainer() {
  return (
    <Box component="section" className="buttons-c">
      <Box className="custom-container" textAlign="center">
        <div className="box-container">
          <Box className="box-content">
            <Typography variant="body1">Verb</Typography>
          </Box>
          <Box className="box-content">
            <Typography variant="body1">Verb</Typography>
          </Box>
        </div>
        <div className="box-container">
          <Box className="box-content">
            <Typography variant="body1">Verb</Typography>
          </Box>
          <Box className="box-content">
            <Typography variant="body1">Verb</Typography>
          </Box>
        </div>
      </Box>
      <div className="circle">
        <div className="circle-content"></div>
      </div>
    </Box>
  );
}
