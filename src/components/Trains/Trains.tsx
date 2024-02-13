import { TheadValueTrains } from '../../constants';
import { useAppSelector } from '../../hooks';
import { TableTrains } from './Table';

export const Trains = () => {
  const TrainsData = useAppSelector((state) => state.getTrains.list);

  return <TableTrains theadValue={TheadValueTrains} tbodyValue={TrainsData} />;
};
