import React from 'react';
import EductionItem from './EductionItem';

const EducationList = () => {
  const EductionList = [
    'University of Cambridge',
    'University of London',
    'University of Southampton',
  ];

  return (
    <section>
      {EductionList.map((item) => (
        <EductionItem institution={item}/>
      ))}
    </section>
  );
};

export default EducationList;
