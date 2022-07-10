import React, { useState }from 'react';
import { BuildFormElements } from '../helpers/format';
import FormElements from './FormElements';

const EducationForm: React.FC<{ closeModal: () => void; }> = ({ closeModal }) => {
  const elements = BuildFormElements();

  const onChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <>
      <button onClick={closeModal}>close</button>
      <div>I am a modal</div>
      <form>
         {elements.map((input) => (
            <FormElements 
                key={input.id}
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                errorMessage={input.errorMessage}
                options={input.options? input.options : []}
                onChange={onChange}
            />
         ))}
      </form>
    </>
  );
};

export default EducationForm;
