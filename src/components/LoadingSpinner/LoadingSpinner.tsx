import React from 'react';

import styles from './loadingSpinner.module.scss';

function LoadingSpinner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner} />
    </div>
  );
}

export default LoadingSpinner;
