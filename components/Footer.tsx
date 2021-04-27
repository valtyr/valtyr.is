import { FunctionComponent } from 'react';

import styles from './Footer.module.css';

const Footer: FunctionComponent = () => {
  return (
    <div className={styles.footer}>
      <img className={styles.logo} src="/logo.svg" alt="VÖK logo" />
      <p>
        <span>Valtýr Örn Kjartansson</span> <br />
        <a href="tel:+3548578037">857-8037</a> | valtyr.is <br />
        valtyr@gmail.com <br />
        <a href="http://m.me/valtyr" target="_blank">
          m.me/valtyr
        </a>
      </p>
    </div>
  );
};

export default Footer;
