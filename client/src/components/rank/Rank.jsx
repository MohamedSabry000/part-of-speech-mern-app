import { Box, Button, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRank } from '../../api';
import { resetWords } from '../../redux/reducers/words';
import CircularProgressBar from '../rank-progress/CircularProgressBar.tsx';

import './rank.css';

export default function Rank() {
  const [rank, setRank] = useState(0);
  const { score } = useSelector(state => state.words);

  const dispatch = useDispatch();

  useEffect(() => {
    getRank().then(res => {
      setRank(res.data.rank);
    });
  }, [score]);

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
                <Button variant="contained" color="primary" className="rank-button" onClick={() => {dispatch(resetWords())}}>
                  Try again
                </Button>
              </Box>
            </div>
          </Container>
        </div>
    </section>
  )
}
