import React from 'react';

function ButtonComp() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      Click me!
    </button>
  );
}

export default ButtonComp;
