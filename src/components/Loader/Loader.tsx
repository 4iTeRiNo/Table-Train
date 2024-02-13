import { useEffect, useState } from 'react';
import styles from './Loader.module.css';

export const Loader = () => {
  const [rotate, setRotate] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRotate(false);
    }, 2000);
  });
  return (
    <>
      {rotate ? (
        <div className={styles.wrapper}>
          <div className={styles.ldsRing}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <span>Update....</span>
        </div>
      ) : (
        <div className={styles.wrapper}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#00BA00"
            className={styles.doneIcon}
            viewBox="0 0 512 512"
          >
            <path
              d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
              stroke="00BA00"
              strokeMiterlimit="10"
              strokeWidth="32"
            />
            <path
              stroke="00BA00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M368 192L256.13 320l-47.95-48M191.95 320L144 272M305.71 192l-51.55 59"
            />
          </svg>
          <span>Done.</span>
        </div>
      )}
    </>
  );
};
