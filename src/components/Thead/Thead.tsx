import styles from './Thead.module.css';
interface TheadProps {
  theadValue: string[];
}
export const Thead = ({ theadValue }: TheadProps) => {
  return (
    <thead className={styles.thead}>
      <tr>
        {theadValue.map((value, index) => (
          <th key={index}>{value}</th>
        ))}
      </tr>
    </thead>
  );
};
