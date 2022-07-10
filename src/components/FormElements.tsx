import React, { useState } from 'react';
import styles from '../styles/FormElements.module.css';

const FormElements: React.FC<{
  type: string;
  value?: string;
  name: string;
  errorMessage: string;
  onChange: (event) => void;
  onBlur: () => void;
  placeholder: string;
  required?: boolean;
  options?: string[];
}> = (props) => {
  const [focused, setFocused] = useState(false);
  const {
    errorMessage,
    onChange,
    onBlur,
    type,
    name,
    placeholder,
    value,
    required,
    options,
  } = props;
  const handleFocus = async () => {
    setFocused(true);
    setTimeout(() => {
      onBlur();
    }, 1000);
  };

  if (type === 'text') {
    return (
      <div className={`${styles.div_input} ${styles.span_grid}`}>
        <label htmlFor={name} className={`${name === 'degree' && styles.top_gap}`}>{placeholder}</label>
        <input
          type={type}
          name={name}
          onChange={(event) => onChange(event)}
          value={value}
          onBlur={handleFocus}
          data-focused={focused.toString()}
          required={required}
          autoComplete="off"
          className={`${name === 'university' ? styles.no_gap : styles.gap}`}
        />
        <span>{errorMessage}</span>
      </div>
    );
  } else if (type === 'select') {
    return (
      <div className={styles.div_input}>
        <label htmlFor={name}>{placeholder}</label>
        <div className={`${styles.selectWrapper} ${styles.gap}`}>
          <select
            onChange={(event) => onChange(event)}
            required={required}
            name={name}
          >
            <option value="" hidden>
              - select -
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
