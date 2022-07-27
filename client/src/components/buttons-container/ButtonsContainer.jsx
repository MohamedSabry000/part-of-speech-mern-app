import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setCurrentWord, setScore } from "../../redux/reducers/words";
import Buttons from "./Buttons";

import './buttons-container.css';

export default function ButtonsContainer({word, setProgress}) {
  const types1 = useRef(['Verb', 'Adverb']);
  const types2 = useRef(['Noun', 'Adjective']);

  const dispatch = useDispatch();

  const onButtonClick = (type) => {
    setProgress(progress => progress + 10);
    if(word.pos.toLowerCase() === type.toLowerCase()) {
      dispatch(setScore())
    }
    dispatch(setCurrentWord())
  }
  return (
    <Box component="section" className="buttons-c">
      <Box className="custom-container" textAlign="center">
        <Buttons types={types1} onButtonClick={onButtonClick} />
        <Buttons types={types2} onButtonClick={onButtonClick} />
      </Box>
      <div className="circle">
        <div className="circle-content"></div>
      </div>
    </Box>
  );
}
