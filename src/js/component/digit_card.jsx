import React from 'react';

const DigitCard = ({ digit }) => {
  return (
    <div className="digit-card" style={digitCardStyle}>
      <span>{digit}</span>
    </div>
  );
};

const digitCardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100px',
  height: '150px',
  margin: '5px',
  backgroundColor: '#000',
  color: '#fff',
  fontSize: '3rem',
  borderRadius: '10px'
};

export default DigitCard;
