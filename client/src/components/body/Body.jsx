import React, { useState } from 'react'
import { Box, Container, Grid, Typography } from "@mui/material";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import './body.css'
import ButtonsContainer from '../buttons-container/ButtonsContainer';
import LinearProgressWithLabel from '../progress/Progress';

export default function Body() {
  const [progress, setProgress] = useState(10);
  const { currentWord } = useSelector(state => state.words);

  return (
    <section id="main-body">
      <Box sx={{ width: '100%' }}>
        <LinearProgressWithLabel  color="secondary" value={progress} />
      </Box>
        <div className="body-wrapper">
          <Container className="main-body-container">
            <div className="container-default">
                {currentWord? (
                    <section className="word-container">
                      <div className="word-wrapper">
                        <Box className="word-box">
                          <h3 className="word">{currentWord.word}</h3>
                        </Box>
                      </div>
                      <ButtonsContainer word={currentWord} setProgress={setProgress} />
                    </section>
                ) : (
                  <h3>sorry no data to show</h3>
                  )}
            </div>
          </Container>
        </div>
    </section>
  )
}
