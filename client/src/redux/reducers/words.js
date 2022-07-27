import { createSlice } from '@reduxjs/toolkit';

export const wordsSlice = createSlice({
  name: 'words',
  initialState: {
    words: [],
    currentWord: {},
    score: 0,
  },
  reducers: {
    resetWords: (state) => {
      state.words = [];
      state.currentWord = {};
      state.score = 0;
    },
    setWords: (state, action) => {
      state.words = action.payload;
    },
    setCurrentWord: (state, action) => {
      state.currentWord = action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    }
  }
});

export const { resetWords, setWords, setCurrentWord, setScore } = wordsSlice.actions;

export default wordsSlice.reducer;