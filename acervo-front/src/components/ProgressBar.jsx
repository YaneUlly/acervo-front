import { useState } from 'react';

function ProgressBar({ progress, totalSteps }) {
  const percentage = (progress / totalSteps) * 100;

  return (
    <div style={{ width: '60%', backgroundColor: '#B7A58D' }}>
      <div
        style={{
          width: `${percentage}%`,
          height: '5px',
          backgroundColor: '#FFB82E',
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;
