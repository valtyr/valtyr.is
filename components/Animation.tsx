import classNames from 'classnames';
import {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import styles from './Animation.module.css';

const Animation: FunctionComponent<{ onEnd: () => void }> = ({ onEnd }) => {
  const [fadingOut, setFadingOut] = useState(false);
  const imageRef = useRef<HTMLImageElement>();

  useEffect(() => {
    if (imageRef.current.complete) {
      window.setTimeout(() => setFadingOut(true), 2300);
      window.setTimeout(onEnd, 2800);
    }
  }, []);

  return (
    <div
      className={classNames(styles.anim, fadingOut && styles.fadeOut)}
      onAnimationEnd={onEnd}
    >
      <img
        src="/anim_no_loop.gif"
        onLoad={() => {
          window.setTimeout(() => setFadingOut(true), 2300);
        }}
        ref={imageRef}
      />
    </div>
  );
};

export default Animation;
