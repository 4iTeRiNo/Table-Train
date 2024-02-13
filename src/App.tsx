import { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchTrain } from './store/thunks';
import { Trains } from './components/Trains/Trains';
import { Characteristics } from './components/Characteristics';
import { Button } from './components/Button';

function App() {
  const id = useAppSelector((state) => state.getTrains.train?.id);
  const { errorData } = useAppSelector((state) => state.getTrains);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTrain());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="table1">
        <Trains />
      </div>
      {id || id === 0 ? (
        <div className="wrapper">
          <div className="table2">
            <Characteristics />
          </div>
          {errorData.length ? (
            <Button disabled={true} />
          ) : (
            <Button disabled={false} />
          )}
        </div>
      ) : undefined}
    </div>
  );
}

export default App;
