import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Education from '../models/education';
import styles from '../styles/PersonEducation.module.css';

const Institutions: React.FC<{ data: Education[] }> = ({ data }) => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    setSchools(data);
  }, []);

  return (
    <div className={styles.institutions}>
      <h4>Academic Institution(s)</h4>
      <ul>
        {schools.reverse().map((item: Education) => (
          <li key={uuidv4()}>{item.university}</li>
        ))}
      </ul>
    </div>
  );
};

export default Institutions;
