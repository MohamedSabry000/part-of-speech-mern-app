import { createSlice } from '@reduxjs/toolkit';

export const wordsSlice = createSlice({
  name: 'words',
  initialState: {
    words: [],        // array of words
    currentWord: {},  // currentWord is a word object
    score: 0,         // total score of all words
    index: 0,         // index of current word
    finished: false,  // true if the game is finished
  },
  reducers: {
    // reset the game
    resetWords: (state) => {
      state.words = [];
      state.currentWord = {};
      state.score = 0;
      state.index = 0;
      state.finished = false;
    },
    // get all words from the server, then set the words array, currentWord, and score
    setWords: (state, action) => {
      state.words = action.payload;
      state.currentWord = action.payload[0];
      state.index = 1;
    },
    // set the next word in the words array as the current word
    setCurrentWord: (state) => {
      if (state.index < state.words.length) {
        state.currentWord = state.words[state.index];
        state.index += 1;
      } else {
        state.currentWord = {};
      }
    },
    // add a point to the score
    setScore: (state) => {
      state.score += 10;
    }
  }
});

export const { resetWords, setWords, setCurrentWord, setScore } = wordsSlice.actions;

export default wordsSlice.reducer;