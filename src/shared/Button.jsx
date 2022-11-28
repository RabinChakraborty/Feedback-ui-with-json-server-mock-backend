import React from 'react';

const Button = ({ children, version, type, isDisabled, value }) => {
  return (
    <>
      <button
        type={type}
        disabled={isDisabled}
        className={`btn btn-${version}`}
      >
        {children}
      </button>
    </>
  );
};
Button.defaultProps = {
  isDisabled: false,
  version: 'primary',
  type: 'button',
};

export default Button;
