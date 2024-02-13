import styles from './Table.module.css';
import { Characteristic, TrainData } from '../../../types';
import { Thead } from '../../Thead';
import { FormEditTable } from '../FormEditable/FormEditable';

interface TableProps {
  theadValue: string[];
  train: TrainData | undefined;
}

export const TableDescription = ({ theadValue, train }: TableProps) => {
  return (
    <table className={styles.table}>
      <caption className={styles.caption}>Характеристики</caption>
      <caption className={styles.caption}>{train?.name}</caption>
      <Thead theadValue={theadValue} />
      <tbody>
        {train?.characteristics.map((value, index) => {
          return (
            <tr key={index}>
              {Object.entries(value).map(([key, value]) => {
                return (
                  <FormEditTable
                    index={index}
                    value={value}
                    characteristic={key as Characteristic}
                    key={key}
                  />
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
