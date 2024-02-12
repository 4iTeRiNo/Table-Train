import styles from './Button.module.css';

interface ButtonProps {
  disabled: boolean;
}

export const Button = ({ disabled }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={styles.button}
      onClick={() => console.log('ge')}
    >
      Отправить данные
    </button>
  );
};
