import { useEffect, useState } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchTrain } from './store/thunks';
import { Trains } from './components/Trains/Trains';
import { Characteristics } from './components/Characteristics';
import { Button } from './components/Button';

function App() {
  const [showTableToIndex, setShowTableToIndex] = useState<number | undefined>(
    undefined,
  );
  const { disabled: disabled } = useAppSelector((state) => state.getTrains);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTrain());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="table1">
        <Trains setShowTableToIndex={setShowTableToIndex} />
      </div>
      {showTableToIndex ? (
        <div className="wrapper">
          <div className="table2">
            <Characteristics showTableToIndex={showTableToIndex} />
          </div>
          <Button disabled={disabled} />
        </div>
      ) : undefined}
    </div>
  );
}

export default App;
