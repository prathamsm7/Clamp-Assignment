import React from 'react';

const MyButton = ({ text, bg }) => {
  return (
    <button
      style={{
        color: 'white',
        background: `${bg}`,
        border: 'none',
        borderRadius: '6px',
        marginRight: '10px',
        fontSize: 'smaller',
        marginBottom: '8px',
      }}
    >
      {text}
    </button>
  );
};

export default MyButton;
