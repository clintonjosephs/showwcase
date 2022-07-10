import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import EducationItem from './EducationItem';
import styles from '../styles/PersonEducation.module.css';

const EducationList = () => {
  const EducationList = [
    {
      university: 'Nnamdi Azikiwe University',
      degree: 'Bachelor of Science',
      field_of_study: 'Science Education',
      start_date: 'September,2009',
      end_date: 'September,2013',
      grade: 'First Class',
      activities: 'Wrote a project on the effects of multimedia learning',
      description: 'Wrote a project on the effects of multimedia learning',
      user_id: '7d8e52f8-86f7-4b27-ba7d-d9fa88288fcf',
    },
    {
      university: 'kdsfjdksljfds',
      degree: 'Masters degree in accounting',
      field_of_study: 'Management',
      start_date: 'September,2020',
      end_date: 'October,2023',
      grade: 'A',
      activities: 'Hello',
      description: 'Hello',
      user_id: '7d8e52f8-86f7-4b27-ba7d-d9fa88288fcf',
    },
    {
      university: 'Pan African Christian University College',
      degree: 'Modern Theology',
      field_of_study: 'Word of God',
      start_date: 'February,2032',
      end_date: 'March,2033',
      grade: 'Pastorate',
      activities: 'Just to describe',
      description: 'Just to describe',
      user_id: '7d8e52f8-86f7-4b27-ba7d-d9fa88288fcf',
    },
  ];

  return (
    <ul className={styles.educationList}>
      {EducationList.map((item) => (
        <EducationItem institution={item} key={uuidv4()} />
      ))}
    </ul>
  );
};

export default EducationList;
