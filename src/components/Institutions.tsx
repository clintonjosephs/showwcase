import React from 'react';
import Education from '../models/education';
import styles from '../styles/PersonEducation.module.css';

const Institutions: React.FC<{ data: Education[] }> = ({ data }) => {
  return (
    <aside className={styles.institutions}>
      <h4>Academic Institution(s)</h4>
      <ul>
        {data.reverse().map((item) => (
          <li>{item.university}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Institutions;
