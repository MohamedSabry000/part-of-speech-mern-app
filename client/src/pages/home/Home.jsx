import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { resetWords, setWords } from '../../redux/reducers/words';
import { getWords } from '../../api';
import Header from '../../components/header/Header';
import Body from '../../components/body/Body';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetWords());
    getWords().then(res => {
      dispatch(setWords(res.data));
      setLoading(false);
    })
  }, []);

  return (
    loading ? <div>Loading...</div>
    : <div id="home">
      <Header />
      <Body />
    </div>
  )
}
