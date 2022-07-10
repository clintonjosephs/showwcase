import React, { useState } from 'react';
import { BuildFormElements, fields } from '../helpers/format';
import FormElements from './FormElements';
import styles from '../styles/EducationForm.module.css';
import SuggestionsList from './SuggestionsList';
import { getSchools, postRequest } from '../helpers/calls';
import University from '../models/university';
import { uuid } from 'uuidv4';
import Education from '../models/education';

const EducationForm: React.FC<{ closeModal: () => void; personId: string }> = ({
  closeModal,
  personId,
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [formData, setFormData] = useState(fields);

  const elements = BuildFormElements();

  const clearSuggestions = () => {
    setSuggestions([]);
  }

  const handleSchoolSelect = ( school_name: string ) => {
    setFormData( {...formData, university: school_name} );
    clearSuggestions();
  };

  const onChange = async (e) => {
    const data = e.target.value;
    setFormData({ ...formData, [e.target.name]: data });
    if (e.target.name === 'university' && data.length >= 3) {
      const response = await getSchools(data);
      const response_data = await response.json();
      setSuggestions(
        response_data.slice(0, 10).map(
          (value) =>
            new University(
              value.country,
              value.name,
              value.domains,
              value.web_pages
            )
        )
      );
    } else {
      clearSuggestions();
    }
  };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const educationToAdd = new Education(
        personId,
        formData.university,
        formData.degree,
        formData.field_of_study,
        formData.start_date_month + ',' + formData.start_date_year,
        formData.end_date_month + ',' + formData.end_date_year,
        formData.grade,
        formData.description,
        formData.description
    );

    const response = await postRequest('/api/add_education', educationToAdd);

    const data = await response.json();
    console.log(data)
  }

  return (
    <>
      <div className={styles.modalHeading}>
        <span>Add Education</span>
        <button onClick={closeModal} className={styles.closeBtn}>
          X
        </button>
      </div>

      <form className={styles.form} onSubmit={submitHandler}>
        {elements.map((input) => {
          let mm = (
            <>
              <FormElements
                key={input.id}
                name={input.name}
                type={input.type}
                value={ formData[input.name] }
                placeholder={input.placeholder}
                errorMessage={input.errorMessage}
                options={input.options ? input.options : []}
                onChange={onChange}
                onBlur={clearSuggestions}
                required={input.required}
              />
              {input.name === 'university' && suggestions.length > 0 && (
                <SuggestionsList data={suggestions} handleClick={handleSchoolSelect}  key={uuid()} />
              )}
            </>
          );
          return mm;
        })}
        <div style={{ width: '100%', gridColumn: 'span 2' }}>
          <button type="submit" className={styles.educationBtn}>
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default EducationForm;
