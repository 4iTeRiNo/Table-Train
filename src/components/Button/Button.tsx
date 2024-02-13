import styles from './Button.module.css';

interface ButtonProps {
  disabled: boolean;
  sortedSpeed: number[] | undefined;
}

export const Button = ({ disabled, sortedSpeed }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={styles.button}
      onClick={() => console.log(sortedSpeed)}
    >
      Отправить данные
    </button>
  );
};
