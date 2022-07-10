import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import EducationItem from './EducationItem';
import styles from '../styles/PersonEducation.module.css';
import Education from '../models/education';

const EducationList: React.FC<{ data: Education[] }> = ({ data }) => {
  console.log(data);
  return (
    <ul className={styles.educationList}>
      {data.map((item) => (
        <EducationItem institution={item} key={uuidv4()} />
      ))}
    </ul>
  );
};

export default EducationList;
