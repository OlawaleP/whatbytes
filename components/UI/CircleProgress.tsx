import React from 'react';

interface CircleProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  circleColor?: string;
}

const CircleProgress = ({
  percentage,
  size = 120,
  strokeWidth = 10,
  circleColor = '#4f46e5'
}: CircleProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg height={size} width={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          stroke={circleColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <div className="flex items-center">
          <div className="text-xl font-bold">{percentage}</div>
          <div className="text-xs">%</div>
        </div>
      </div>
    </div>
  );
};

export default CircleProgress;