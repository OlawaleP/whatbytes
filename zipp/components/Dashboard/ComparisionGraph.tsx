import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

interface ComparisonGraphProps {
  percentile: number;
}

const ComparisonGraph = ({ percentile }: ComparisonGraphProps) => {
  // Generate bell curve data points
  const generateBellCurveData = () => {
    const data = [];
    const mean = 50;
    const stdDev = 15;
    const pointCount = 20;

    for (let i = 0; i <= 100; i += 5) {
      const x = i;
      // Normal distribution formula
      const y = 
        100 * Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2)) / 
        (stdDev * Math.sqrt(2 * Math.PI));
      
      data.push({ x, y });
    }
    return data;
  };

  const bellCurveData = generateBellCurveData();

  return (
    <div>
      <h3 className="font-medium text-lg mb-2">Comparison Graph</h3>
      <p className="text-sm text-gray-600 mb-4">
        You scored {percentile}% percentile which is {percentile > 72 ? 'higher' : 'lower'} than the
        average percentile 72% of all the engineers who took this assessment
      </p>
      
      <div className="h-64 relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={bellCurveData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#6366F1" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="x" 
              type="number" 
              domain={[0, 100]} 
              tickCount={6} 
            />
            <YAxis hide />
            <Area 
              type="monotone" 
              dataKey="y" 
              stroke="#6366F1" 
              fillOpacity={1} 
              fill="url(#colorValue)" 
              dot={(props) => {
                const { cx, cy, index } = props;
                const xValue = bellCurveData[index].x;
                
                // Only show dots at specific points
                if (index % 3 === 0 || xValue === percentile) {
                  return (
                    <circle 
                      cx={cx} 
                      cy={cy} 
                      r={3} 
                      fill={xValue === percentile ? "#4F46E5" : "#6366F1"} 
                      stroke="#fff" 
                      strokeWidth={1} 
                    />
                  );
                }
                return null;
              }}
            />
            {/* Mark user's percentile */}
            {percentile && (
              <line 
                x1={`${percentile}%`} 
                y1="0%" 
                x2={`${percentile}%`} 
                y2="100%" 
                stroke="#4F46E5" 
                strokeWidth={1} 
                strokeDasharray="3 3" 
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
        
        {/* Percentile marker */}
        <div 
          className="absolute text-sm text-indigo-600"
          style={{ 
            right: '10%', 
            top: '40%',
          }}
        >
          your percentile
        </div>
      </div>
    </div>
  );
};

export default ComparisonGraph;