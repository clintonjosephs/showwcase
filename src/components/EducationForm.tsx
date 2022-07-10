import React, { useState } from 'react';
import { BuildFormElements } from '../helpers/format';
import FormElements from './FormElements';
import styles from '../styles/EducationForm.module.css';

const EducationForm: React.FC<{ closeModal: () => void, personId: string }> = ({
  closeModal,
  personId
}) => {
  const elements = BuildFormElements();

  const onChange = (e) => {
    console.log(personId);
    console.log(e.target.value);
  };

  return (
    <>
      <div className={styles.modalHeading}>
        <span>Add Education</span>
        <button onClick={closeModal} className={styles.closeBtn}>X</button>
      </div>

      <form className={styles.form}>
        {elements.map((input) => (
          <FormElements
            key={input.id}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            errorMessage={input.errorMessage}
            options={input.options ? input.options : []}
            onChange={onChange}
            required={input.required}
          />
        ))}
        <div style={{ width: '100%', gridColumn: 'span 2' }}>
          <button type='submit' className={styles.educationBtn}>Save</button>
        </div>
      </form>
    </>
  );
};

export default EducationForm;
