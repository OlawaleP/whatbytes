import React from 'react';

interface ProgressBarProps {
  value: number;
  color?: string;
}

const ProgressBar = ({ value, color = 'blue-500' }: ProgressBarProps) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className={`bg-${color} h-2.5 rounded-full`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;