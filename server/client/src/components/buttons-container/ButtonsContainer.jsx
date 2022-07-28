import { Box } from "@mui/material";
import React, { useRef } from "react";
import { toast } from 'react-toastify';

import { useDispatch } from "react-redux";
import { setCurrentWord, setScore } from "../../redux/reducers/words";
import Buttons from "./Buttons";

import './buttons-container.css';

export default function ButtonsContainer({word}) {
  const types1 = useRef(['Verb', 'Adverb']);
  const types2 = useRef(['Noun', 'Adjective']);

  const notifyTrue = () => {
    toast.success("Great!");
  }
  const notifyFalse = () => {
    toast.error("Oh Noo!");
  };

  const dispatch = useDispatch();

  const onButtonClick = (type) => {
    if(word.pos.toLowerCase() === type.toLowerCase()) {
      dispatch(setScore())
      notifyTrue();
    }else {
      notifyFalse();
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
