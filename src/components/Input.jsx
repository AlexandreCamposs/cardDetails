import React from 'react';

const Input = ({ type, name, value, placeholder }) => {
  return (
    <>
      <input type={type} name={name} value={value} placeholder={placeholder} />
      {/* className="submit" */}
    </>
  );
};

export default Input;
