import React from 'react'
import { Box, Container, Grid } from "@mui/material";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import './body.css'

export default function Body() {

  const dispatch = useDispatch();
  const currentWord = useSelector(state => state.words);

  return (
    <section className="main-body">
        <div className="body-wrapper">
          <Container className="main-body-container">
          <div className="container-default">
            <Grid container spacing={5}>
              {currentWord? (
                <div>
                  <Grid item xs={12}>
                    <div className="word-container">
                      <div className="word">
                        <h3 className="word-title">{currentWord.word}</h3>
                      </div>
                    </div>
                  </Grid>
                </div>
              ) : (
                <h3>sorry no data to show</h3>
              )}
            </Grid>
          </div>
          </Container>
        </div>
    </section>
  )
}
