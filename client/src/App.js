import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { resetWords } from './redux/reducers/words';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetWords());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
