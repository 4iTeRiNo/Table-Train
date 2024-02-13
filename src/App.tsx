import { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchTrain } from './store/thunks';
import { Trains } from './components/Trains/Trains';
import { Characteristics } from './components/Characteristics';
import { Button } from './components/Button';
import { Loader } from './components/Loader/Loader';

function App() {
  const id = useAppSelector((state) => state.getTrains.train?.id);
  const { errorData, train, isLoading } = useAppSelector(
    (state) => state.getTrains,
  );

  const sortedSpeed = train?.characteristics
    ?.map((item) => item.speed)
    .sort((a: number, b: number): number => a - b);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTrain());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="table1">
        {isLoading && <Loader />}
        <Trains />
      </div>
      {id || id === 0 ? (
        <div className="wrapper">
          <div className="table2">
            <Characteristics />
          </div>
          {errorData.length ? (
            <Button sortedSpeed={sortedSpeed} disabled={true} />
          ) : (
            <Button sortedSpeed={sortedSpeed} disabled={false} />
          )}
        </div>
      ) : undefined}
    </div>
  );
}

export default App;
