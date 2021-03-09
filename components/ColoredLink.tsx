import { FunctionComponent } from 'react';
import { Category, logEvent } from '../utils/analytics';

import styles from './ColoredLink.module.css';

const ColoredLink: FunctionComponent<{ href: string; color: string }> = ({
  href,
  color,
  children,
}) => {
  return (
    <a
      className={styles.link}
      href={href}
      style={{ backgroundColor: color }}
      onClick={(e) =>
        logEvent(
          Category.LinkClicked,
          (e.target as HTMLAnchorElement).innerText.trim(),
        )
      }
    >
      {children}
    </a>
  );
};

export default ColoredLink;
