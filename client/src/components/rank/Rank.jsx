import { Box, Container } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import CircularProgressBar from '../rank-progress/CircularProgressBar.tsx';

import './rank.css';

export default function Rank() {

  const { score } = useSelector(state => state.words);

  useEffect(() => {

  }, [score]);

  return (
    <section id="rank">
        <div className="body-wrapper">
          <Container className="main-body-container">
            <div className="container-default">
              <section className="rank-container">
              <CircularProgressBar
                  selectedValue={25}
                  maxValue={50}
                  textColor='#f00'
                  activeStrokeColor='#cc6600'
                  withGradient
                  textSize={20}
                  label="Incorrect"
              />

              <CircularProgressBar
                  selectedValue={75}
                  maxValue={100}
                  radius={100}
                  activeStrokeColor='#0f4fff'
                  withGradient
                  label="Correct"
              />
              </section>
            </div>
          </Container>
        </div>
    </section>
  )
}
