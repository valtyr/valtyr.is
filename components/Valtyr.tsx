import { FunctionComponent } from 'react';

import styles from './Valtyr.module.css';

const Valtyr: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <img className={styles.profile} src="valtyr.jpg" />
    </div>
  );
};

export default Valtyr;
