import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { resetWords, setWords } from '../../redux/reducers/words';
import { getWords } from '../../api';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetWords());
    getWords().then(words => {
      dispatch(setWords(words));
    })
  }, []);

  return (
    <div>Home</div>
  )
}
