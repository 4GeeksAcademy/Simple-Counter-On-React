import React, { useEffect, useState } from "react";
import DigitCard from "./digit_card.jsx";
import ControlPanel from "./ControlPanel.jsx";

// Create your first component
const Home = () => {
  const [counter, setCounter] = useState(0); // Start the counter at 0
  const [isPaused, setIsPaused] = useState(false);
  const [resumeLabel, setResumeLabel] = useState("fa-solid fa-pause") // State variable to control pause/resume

  // const [iconClass, setIconClass] = useState("fa-solid fa-pause");
  const [resumeVisible, setResumeVisible] = useState(false); // New state for Resume button visibility

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCounter((prevCounter) => prevCounter + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused]); // Dependency array includes isPaused

  const onPause = () => {
    const togglePlayOrPause = isPaused === false ? true : false;
    setIsPaused(togglePlayOrPause); // Pause the counter
    setResumeVisible(true); // Show resume button when counter is Paused
    const  togglePlayPauseIcon = resumeLabel === "fa-solid fa-pause" ? "fa-solid fa-play" : "fa-solid fa-pause";
    setResumeLabel(togglePlayPauseIcon)
  };

  // const onResume = () => {
  //   setIsPaused(false);
  
  //   setResumeLabel("fa-solid fa-pause");// Resume the counter
  //   setResumeVisible(false);  //hide resume button when resuming
  // };

  const onStop = () => {
    setIsPaused(true); // Stop the counter
    setCounter(0); 
    setResumeLabel("fa-solid fa-play");// Reset the counter
    setResumeVisible(true); 
  };


  // Pad the counter string to always show 6 digits
  const counterString = String(counter).padStart(6, '0');
  const digits = counterString.split('');

  return (
    <div style={containerStyle}>
      <div style={counterStyle}>
        <DigitCard key="clock" digit={<i className="fa-solid fa-stopwatch"></i>} />
        {digits.map((digit, index) => (
          <DigitCard key={index} digit={digit} />
        ))}
      </div>
      <ControlPanel onPause={onPause} onStop={onStop} resumeVisible={resumeVisible} resumeLabel={resumeLabel} />
      {/* onPause={() => setIsPaused(true)} */}
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#222'
};

const counterStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '20px',
};

export default Home;
