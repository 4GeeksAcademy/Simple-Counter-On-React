import React, { useEffect, useState } from "react";
import DigitCard from "./digit_card.jsx";

// Create your first component
const Home = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convert counter to a string and pad with zeros to ensure it has six digits
  const counterString = String(counter).padStart(7, '0');
  const digits = counterString.split('');

  return (
    <div style={containerStyle}>
      {digits.map((digit, index) => (
        index === 0 ? (
          <DigitCard key={index} digit={<i class="fa-solid fa-stopwatch"></i>} />
        ) : (
          <DigitCard key={index} digit={digit} />
        )
      ))}
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#222'
};

export default Home;
