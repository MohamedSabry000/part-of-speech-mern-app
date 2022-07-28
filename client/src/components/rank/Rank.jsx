import { Box, Button, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRank, getWords } from '../../api';
import { resetWords, setWords } from '../../redux/reducers/words';
import CircularProgressBar from '../rank-progress/CircularProgressBar.tsx';

import './rank.css';

export default function Rank() {
  const [rank, setRank] = useState(0);
  const { score } = useSelector(state => state.words);

  const dispatch = useDispatch();

  useEffect(() => {
    getRank(score).then(res => {
      console.log(res.data);
      setRank(res.data.rank);
    });
  }, [score]);

  const tryAgain = () => {
    dispatch(resetWords());
    getWords().then(res => {
      dispatch(setWords(res.data));
    })
  }

  return (
    <section id="rank">
        <div className="body-wrapper">
          <Container className="main-body-container">
            <div className="container-default">
              <section className="rank-container">
                <CircularProgressBar
                    selectedValue={rank}
                    maxValue={100}
                    radius={100}
                    activeStrokeColor='#0f4fff'
                    withGradient
                    label="Rank"
                />
              </section>
              <Box className="rank-box">
                <Button variant="contained" color="primary" className="rank-button" onClick={tryAgain}>
                  Try again
                </Button>
              </Box>
            </div>
          </Container>
        </div>
    </section>
  )
}
