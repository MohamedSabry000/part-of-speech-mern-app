import { configureStore } from '@reduxjs/toolkit'

import wordsReducer from './reducers/words'

const store = configureStore({
  reducer: {
    words: wordsReducer,
  }
})

export default store;