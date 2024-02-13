import { useCallback, FocusEventHandler } from 'react';
import styles from './FormEditable.module.css';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { validateValue } from '../../../store/action';
import { Characteristic } from '../../../types';

interface FormEditTableProp {
  value: string | number;
  index: number;
  characteristic: Characteristic;
}
export const FormEditTable = ({
  value,
  index,
  characteristic,
}: FormEditTableProp) => {
  const dispatch = useAppDispatch();
  const { isValidate } = useAppSelector((state) => state.getTrains);

  const onBlur = useCallback<FocusEventHandler<HTMLTableDataCellElement>>(
    (event) => {
      const value = event.currentTarget.textContent;
      if (value?.trim() && value !== event.target.dataset.value) {
        dispatch(
          validateValue({
            index: index,
            value: value,
            key: characteristic,
          }),
        );
      }
    },
    [dispatch, characteristic, index],
  );
  return (
    <td
      contentEditable="true"
      data-value={value}
      data-id
      data-key={characteristic}
      onBlur={onBlur}
      className={isValidate ? styles.content : styles.error}
    >
      {value}
    </td>
  );
};
