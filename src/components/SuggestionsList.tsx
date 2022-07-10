import React from 'react';
import { uuid } from 'uuidv4';
import University from '../models/university';
import styles from '../styles/EducationForm.module.css';

const SuggestionsList: React.FC<{
  data: University[];
  handleClick: (school_name: string) => void;
}> = ({ data, handleClick }) => {
  return (
    <ul className={styles.suggestionList}>
      {data.map((value) => (
        <li onClick={() => handleClick(value.name)} key={uuid()}>{value.name}</li>
      ))}
    </ul>
  );
};

export default SuggestionsList;
