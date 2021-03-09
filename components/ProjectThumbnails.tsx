import { FunctionComponent } from 'react';

import styles from './ProjectThumbnails.module.css';

const ProjectThumbnails: FunctionComponent = () => {
  return (
    <div className={styles.verkefni}>
      <img src="project-images/11.jpg" alt="" />
      <img src="project-images/3.jpg" alt="" />
      <img src="project-images/10.jpg" alt="" />
      <img src="project-images/1.jpg" alt="" />
      <img src="project-images/9.jpg" alt="" />
      <img src="project-images/12.jpg" alt="" />
    </div>
  );
};

export default ProjectThumbnails;
