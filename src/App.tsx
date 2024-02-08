import { useEffect } from 'react';
import './App.css';
import { useAppDispatch } from './hooks';
import { fetchTrain } from './store/thunks';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTrain());
  }, [dispatch]);

  return <></>;
}

export default App;
