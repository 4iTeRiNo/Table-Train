import { useAppDispatch } from '../../hooks';
import { loaderSaveTrue } from '../../store/action';
import styles from './Button.module.css';

interface ButtonProps {
  disabled: boolean;
  sortedSpeed: number[] | undefined;
}

export const Button = ({ disabled, sortedSpeed }: ButtonProps) => {
  const dispatch = useAppDispatch();
  return (
    <button
      disabled={disabled}
      className={styles.button}
      onClick={() => {
        dispatch(loaderSaveTrue());
        console.log(sortedSpeed);
      }}
    >
      Отправить данные
    </button>
  );
};
