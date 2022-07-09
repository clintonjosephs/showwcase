import React from 'react';
import EducationItem from './EducationItem';

const EducationList = () => {
  const EducationList = [
    'University of Cambridge',
    'University of London',
    'University of Southampton',
  ];

  return (
    <section>
      {EducationList.map((item) => (
        <EducationItem institution={item}/>
      ))}
    </section>
  );
};

export default EducationList;
