import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { v4 } from 'uuid';

import { BuildFormElements, fields } from '../helpers/format';
import { getSchools, postRequest } from '../helpers/calls';
import FormElements from './FormElements';

import SuggestionsList from './SuggestionsList';

import University from '../models/university';
import Education from '../models/education';

import styles from '../styles/EducationForm.module.css';

const EducationForm: React.FC<{ closeModal: () => void; personId: string; updateEducationData: (data: Education) => void; }> = ({
  closeModal,
  updateEducationData,
  personId,
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [formData, setFormData] = useState(fields);
  const [loading, setLoading] = useState(false);

  const elements = BuildFormElements();

  const clearSuggestions = () => {
    setSuggestions([]);
  };

  const handleSchoolSelect = (school_name: string) => {
    setFormData({ ...formData, university: school_name });
    clearSuggestions();
  };

  const onChange = async (e) => {
    const data = e.target.value;
    setFormData({ ...formData, [e.target.name]: data });
    if (e.target.name === 'university' && data.length >= 3) {
      const response = await getSchools(data);
      const response_data = await response.json();
      setSuggestions(
        response_data
          .slice(0, 10)
          .map(
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
    setLoading(true);
    const educationToAdd = new Education(
      personId,
      formData.university,
      formData.degree,
      formData.field_of_study,
      formData.start_date_month + ' , ' + formData.start_date_year,
      formData.end_date_month + ' , ' + formData.end_date_year,
      formData.grade,
      formData.activities,
      formData.description,
    );

    const response = await postRequest('/api/add_education', educationToAdd);

    const data = await response.json();
    if (data.success) {
      toast.success(data.message);
      educationToAdd.id = data.id;
      updateEducationData(educationToAdd);
      setFormData(fields);
    } else {
      toast.error(data.message);
    }
    setLoading(false);
  };

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
                value={formData[input.name]}
                placeholder={input.placeholder}
                errorMessage={input.errorMessage}
                options={input.options ? input.options : []}
                onChange={onChange}
                onBlur={clearSuggestions}
                required={input.required}
              />
              {input.name === 'university' && suggestions.length > 0 && (
                <SuggestionsList
                  data={suggestions}
                  handleClick={handleSchoolSelect}
                  key={v4()}
                />
              )}
            </>
          );
          return mm;
        })}
        <div style={{ width: '100%', gridColumn: 'span 2' }}>
          {!loading ? (
            <button type="submit" className={styles.educationBtn}>
              Save
            </button>
          ) : (
            <button type="button" className={styles.educationBtn}>
              Saving your changes...
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default EducationForm;
