import React from 'react';
import Education from '../models/education';
import styles from '../styles/PersonEducation.module.css';

const EducationItem: React.FC<{ institution: Education }> = ({
  institution,
}) => {
  const {
    university,
    degree,
    field_of_study,
    start_date,
    end_date,
    grade,
    activities,
    description,
  } = institution;
  return <li>
      <div className={styles.card}>
        <div className={styles.container}>
          <h5><b>{ degree } @ { university }</b></h5>
          <span> { start_date } - { end_date }</span>
          <p>{ field_of_study }</p>
          <p>Grade: { grade} </p>
          <p>{ activities } </p>
          <p>{ description } </p>
        </div>
      </div>
    </li>;
};

export default EducationItem;
