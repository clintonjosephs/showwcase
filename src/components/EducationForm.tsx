import React from 'react';

const EducationForm: React.FC<{ closeModal: () => void; }> = ({ closeModal }) => {
  return (
    <>
      <button onClick={closeModal}>close</button>
      <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
    </>
  );
};

export default EducationForm;
