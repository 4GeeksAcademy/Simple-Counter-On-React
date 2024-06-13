import React, { useEffect, useState } from "react";
import DigitCard from "./digit_card.jsx";
import ControlPanel from "./ControlPanel.jsx";

const Home = () => {
  const [counter, setCounter] = useState(300); // Start the counter at 0
  const [isPaused, setIsPaused] = useState(false);
  const [resumeLabel, setResumeLabel] = useState("fa-solid fa-pause"); // State variable to control pause/resume icon
  const [mode, setMode] = useState("simple"); // State variable to control counter mode

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCounter((prevCounter) => prevCounter + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const playPause = () => {
    setIsPaused(!isPaused); // Toggle pause/resume state
    const togglePlayPauseIcon = resumeLabel === "fa-solid fa-pause" ? "fa-solid fa-play" : "fa-solid fa-pause";
    setResumeLabel(togglePlayPauseIcon);
  };

  const onStop = () => {
    setIsPaused(true); // Stop the counter
    setCounter(0);
    setResumeLabel("fa-solid fa-play"); // Reset the counter
  };

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "simple" ? "time" : "simple"));
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  let digits, labels;
  if (mode === "simple") {
    const counterString = String(counter).padStart(6, '0');
    digits = counterString.split('');
    labels = [];
  } else {
    const [hrs, mins, secs] = formatTime(counter).split(':');
    digits = [...hrs, ...mins, ...secs];
    labels = ['Hours', 'Hours', 'Minutes', 'Minutes', 'Seconds', 'Seconds'];
  }

  return (
    <div style={containerStyle}>
      <div style={counterStyle}>
        <DigitCard key="clock" digit={<i className="fa-solid fa-stopwatch"></i>} />
        {digits.map((digit, index) => (
          <div key={index} style={digitContainerStyle}>
            <DigitCard digit={digit} />
            {mode === "time" && <div style={labelStyle}>{labels[index]}</div>}
          </div>
        ))}
      </div>
      <ControlPanel playPause={playPause} onStop={onStop} resumeLabel={resumeLabel} toggleMode={toggleMode} />
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

const digitContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 5px'
};

const labelStyle = {
  marginTop: '5px',
  color: '#fff',
  fontSize: '0.8rem'
};

export default Home;
