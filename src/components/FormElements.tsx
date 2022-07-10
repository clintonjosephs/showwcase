import React, { useState } from 'react';
import styles from '../../styles/FormInput.module.css';

const FormElements: React.FC<{
  type: string;
  value?: string;
  name: string;
  errorMessage: string;
  onChange: () => void;
  placeholder: string;
  required?: boolean;
  options?: string[];
}> = React.forwardRef((props, ref) => {
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
      <div className={styles.div_input}>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          onBlur={handleFocus}
          autoFocus={!focused}
          onFocus={handleFocus}
          required={required}
          ref={ref}
        />
        <span>{errorMessage}</span>
      </div>
    );
  } else if (type === 'select') {
    return (
      <div className={styles.div_input}>
        <select ref={ref}>
          <option value="" hidden>
            {placeholder}
          </option>
          {options.map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>
        <span>{errorMessage}</span>
      </div>
    );
  }
});

export default FormElements;
