import React from "react";

const ControlPanel = ({ onPause, onResume, onStop, resumeVisible, resumeLabel}) => {
  return (
    <div id="control-panel" style={controlPanelStyle}>
      <button onClick={onPause} className="btn btn-dark" style={buttonStyle}><i class={resumeLabel}></i></button>
      <button onClick={onStop} className="btn btn-dark" style={buttonStyle}><i class="fa-solid fa-stop"></i></button>
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
  padding: '10px 20px', // Increase padding for bigger buttons
  fontSize: '1.2rem', // Increase font size
  backgroundColor: '#ffa500', // Choose a color that complements #222 (e.g., orange)
  color: '#fff', // Text color
  borderRadius: '8px', // Add border radius for rounded corners
  border: 'none', // Remove default button border
  cursor: 'pointer', // Change cursor on hover
};

export default ControlPanel;
