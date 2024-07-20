import React from 'react';

const ColorButton = ({ color, setColor }) => {
  return (
    <button
      onClick={() => setColor(color)}
      className='outline-none px-4 py-2 rounded-full shadow-lg text-white'
      style={{ backgroundColor: color }}
    >
      {color.charAt(0).toUpperCase() + color.slice(1)}
    </button>
  );
};

export default ColorButton;
