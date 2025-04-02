import React from "react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine
} from "recharts";
import { TestResult } from "../../types";
import { distributionData } from "@/utils/constant";
import { Card } from "..";

const ComparisonGraph: React.FC<{ data: TestResult }> = ({ data }) => {
  return (
    <Card title="Comparison Graph">
      <div className="relative">
      
        <span className="absolute sm:-top-4 md:-top-12 -top-12 sm:right-0 right-0 border-2 rounded-full p-2 sm:p-3 bg-slate-100">
          <img src="/stats.svg" alt="icon" className="w-4 h-4 sm:w-5 sm:h-5" />
        </span>
        
        <h2 className="text-lg font-bold mb-2"></h2>
        <p className="text-gray-600 mb-6 mt-6 sm:mt-8 text-sm sm:text-base">
          <span className="font-bold">You scored {data.percentile}% percentile</span> which is{" "}
          {data.percentile > data.averagePercentile ? "higher" : "lower"} than <br className="hidden sm:block"/>the
          average percentile {data.averagePercentile}% of all the engineers who took this assessment
        </p>
        
        <div className="h-56 sm:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={distributionData}
              margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
              <XAxis 
                dataKey="percentile" 
                domain={[0, 100]}
                ticks={[0, 25, 50, 75, 100]}
                tick={{ fontSize: 12 }}
              />
              <YAxis hide />
              <Tooltip formatter={(value) => [`${value} noOfStudents`]} />
              <Line 
                type="monotone" 
                dataKey="frequency" 
                stroke="#8884d8" 
                dot={{ stroke: '#8884d8', strokeWidth: 1, r: 2, display: 'none' }}
                activeDot={{ r: 5 }} 
              />
              <ReferenceLine 
                x={data.percentile} 
                stroke="#d1d5db" 
                label={{ 
                  value: "your percentile", 
                  position: "middle", 
                  fill: "#374151", 
                  fontSize: 11,
                  fontWeight: "regular"
                }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};

export default ComparisonGraph;