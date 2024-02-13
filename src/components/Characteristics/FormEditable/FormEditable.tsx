import { useCallback, FocusEventHandler, useState } from 'react';
import styles from './FormEditable.module.css';
import { useAppDispatch } from '../../../hooks';
import { validateValue } from '../../../store/action';
import { Characteristic } from '../../../types';
import { validate } from '../../../utils/getValidateValue';

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
  const [error, setError] = useState<string | null>(null);
  const onBlur = useCallback<FocusEventHandler<HTMLTableDataCellElement>>(
    (event) => {
      const value = event.currentTarget.textContent;

      if (
        (value?.trim() && value !== event.target.dataset.value) ||
        value === event.target.dataset.value
      ) {
        const valueToNum = Number(value);

        if (validate(characteristic, valueToNum)) {
          dispatch(
            validateValue({
              index: index,
              errorWrite: null,
              value: valueToNum,
              key: characteristic,
            }),
          );
          setError(null);
          return;
        } else {
          dispatch(
            validateValue({
              index: index,
              errorWrite: { [characteristic]: 'Ошибка ввода' },
              value: valueToNum,
              key: characteristic,
            }),
          );
          setError('Ошибка ввода');
        }
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
      className={error ? styles.error : styles.content}
    >
      {value}
    </td>
  );
};
