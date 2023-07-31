import React from 'react';

const Input = ({
  type,
  name,
  value,
  placeholder,
  required,
  maxLength,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      maxLength={maxLength}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
