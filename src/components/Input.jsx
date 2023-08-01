import React from 'react';

const Input = ({
  type,
  name,
  value,
  placeholder,

  maxLength,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      maxLength={maxLength}
      required={true}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
