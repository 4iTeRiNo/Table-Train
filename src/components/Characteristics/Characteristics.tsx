import { TheadValueCharacteristics } from '../../constants';
import { useAppSelector } from '../../hooks';
import { TableDescription } from './Table';

export const Characteristics = () => {
  const { train } = useAppSelector((state) => state.getTrains);

  return (
    <TableDescription theadValue={TheadValueCharacteristics} train={train} />
  );
};
