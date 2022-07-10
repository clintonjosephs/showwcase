import React, { useState } from 'react';
import styles from '../styles/FormElements.module.css';

const FormElements: React.FC<{
  type: string;
  value?: string;
  name: string;
  errorMessage: string;
  onChange: (event) => void;
  placeholder: string;
  required?: boolean;
  options?: string[];
}> = (props) => {
  const [focused, setFocused] = useState(false);
  const {
    errorMessage,
    onChange,
    type,
    name,
    placeholder,
    value,
    required,
    options,
  } = props;
  const handleFocus = async () => {
    setFocused(true);
  };

  if (type === 'text') {
    return (
      <div className={`${styles.div_input} ${styles.span_grid}`}>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={(event) => onChange(event)}
          value={value}
          onBlur={handleFocus}
          data-focused={focused.toString()}
          required={required}
        />
        <span>{errorMessage}</span>
      </div>
    );
  } else if (type === 'select') {
    return (
      <div className={styles.div_input}>
        <div className={styles.selectWrapper}>
          <select onChange={(event) => onChange(event)} required={required}>
            <option value="" hidden>
              {placeholder}
            </option>
            {options.map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
        <span>{errorMessage}</span>
      </div>
    );
  }
};

export default FormElements;
