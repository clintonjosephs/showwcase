import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Education from '../models/education';
import styles from '../styles/PersonEducation.module.css';

const Institutions: React.FC<{ data: Education[] }> = ({ data }) => {
  return (
    <div className={styles.institutions}>
      <h4>Academic Institution(s)</h4>
      <ul>
        {data.reverse().map((item: Education) => (
          <li key={uuidv4()}>
            <a href={`#${item.id}`}>{item.university}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Institutions;
