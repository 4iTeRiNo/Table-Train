import styles from './Table.module.css';
import { TrainsData } from '../../../types';
import { Thead } from '../../Thead';
import { useAppDispatch } from '../../../hooks';
import { getTrainByIndex } from '../../../store/action';

interface TableProps {
  theadValue: string[];
  tbodyValue: TrainsData;
  setShowTableToIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export const TableTrains = ({
  theadValue,
  tbodyValue,
  setShowTableToIndex,
}: TableProps) => {
  const dispatch = useAppDispatch();
  return (
    <table className={styles.table}>
      <caption className={styles.caption}>Поезда</caption>
      <Thead theadValue={theadValue} />
      <tbody>
        {tbodyValue?.map((value, index) => {
          return (
            <tr
              onClick={() => {
                setShowTableToIndex(value.id);
                dispatch(getTrainByIndex({ index }));
              }}
              className={styles.tr}
              key={value.id}
            >
              <td>{value.name}</td>
              <td>{value.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
