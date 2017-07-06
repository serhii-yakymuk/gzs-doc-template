import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import styles from './loader.scss';

const Loader = () => {
  return (
    <div className={styles.container}>
      <CircularProgress className={styles.progress} size={80} />
    </div>
  );
};

export default Loader;
