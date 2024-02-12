import { TheadValueTrains } from '../../constants';
import { useAppSelector } from '../../hooks';
import { TableTrains } from './Table';

interface TrainsProps {
  setShowTableToIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export const Trains = ({ setShowTableToIndex }: TrainsProps) => {
  const TrainsData = useAppSelector((state) => state.getTrains.list);

  return (
    <>
      <TableTrains
        setShowTableToIndex={setShowTableToIndex}
        theadValue={TheadValueTrains}
        tbodyValue={TrainsData}
      />
    </>
  );
};
