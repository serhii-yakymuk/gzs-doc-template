import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import styles from './loader.scss';

export default () => {
  return (
    <div className={styles.container}>
      <CircularProgress className={styles.progress} size={100} />
    </div>
  );
};
