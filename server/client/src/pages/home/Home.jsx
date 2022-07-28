import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// For Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { resetWords, setWords } from '../../redux/reducers/words';
import { getWords } from '../../api';
import Header from '../../components/header/Header';
import Body from '../../components/body/Body';
import Rank from '../../components/rank/Rank';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { finished } = useSelector(state => state.words);

  useEffect(() => {
    dispatch(resetWords());
    getWords().then(res => {
      dispatch(setWords(res.data));
      setLoading(false);
    })
  }, []);

  return (
    <>
      {
        loading ? <div>Loading...</div>
        : <div id="home">
            <Header />
            {
              !finished? <Body /> : <Rank />
            }
          </div>
      }
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}
