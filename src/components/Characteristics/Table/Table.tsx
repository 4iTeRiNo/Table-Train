import styles from './Table.module.css';
import { TrainsData } from '../../../types';
import { Thead } from '../../Thead';
import { FormEditTable } from '../FormEditable/FormEditable';
import { Characteristic } from '../../../types';

interface TableProps {
  theadValue: string[];
  tbodyValue: TrainsData;
  descriptionCaption?: string;
  showTableToIndex: number;
}

export const TableDescription = ({
  theadValue,
  tbodyValue,
  descriptionCaption,
  showTableToIndex,
}: TableProps) => {
  const result = tbodyValue[showTableToIndex];

  return (
    <table className={styles.table}>
      <caption className={styles.caption}>Характеристики</caption>
      <caption className={styles.caption}>{descriptionCaption}</caption>
      <Thead theadValue={theadValue} />
      <tbody>
        {result.characteristics.map((value, index) => {
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
