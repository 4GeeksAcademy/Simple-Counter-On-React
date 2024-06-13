import React from "react";

const ControlPanel = ({ playPause, onStop, resumeLabel, toggleMode }) => {
  return (
    <div id="control-panel" style={controlPanelStyle}>
      <button onClick={playPause} className="btn btn-dark" style={buttonStyle}>
        <i className={resumeLabel}></i>
      </button>
      <button onClick={onStop} className="btn btn-dark" style={buttonStyle}>
        <i className="fa-solid fa-stop"></i>
      </button>
      <button onClick={toggleMode} className="btn btn-dark" style={buttonStyle}>
        Toggle Mode
      </button>
    </div>
  );
};

const controlPanelStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginTop: '20px'
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '1.2rem',
  backgroundColor: '#ffa500',
  color: '#fff',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
};

export default ControlPanel;
