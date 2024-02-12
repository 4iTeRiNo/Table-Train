import { useCallback, FocusEventHandler, useState } from 'react';
import styles from './FormEditable.module.css';
import { useAppDispatch } from '../../../hooks';
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
  const [isError, setIsError] = useState(false);

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
        setIsError(true);
      } else {
        setIsError(false);
      }
    },
    [dispatch],
  );
  return (
    <td
      contentEditable="true"
      data-value={value}
      data-id
      onBlur={onBlur}
      className={isError ? styles.error : styles.content}
    >
      {value}
    </td>
  );
};
