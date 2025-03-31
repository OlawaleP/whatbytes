import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { TestResult } from "../../types";
import Card from "../UI/Card";

const ComparisonGraph: React.FC<{ data: TestResult }> = ({ data }) => {
  const graphData = [
    { name: "Your Percentile", value: data.percentile },
    { name: "Average", value: data.averagePercentile },
  ];

  return (
    <Card title="Comparison Graph">
      <p className="mb-4">
        You scored {data.percentile}% percentile which is{" "}
        {data.percentile > data.averagePercentile ? "higher" : "lower"} than the average percentile{" "}
        {data.averagePercentile}% of all the engineers who took this assessment
      </p>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={graphData} layout="vertical">
            <XAxis type="number" domain={[0, 100]} />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="value" fill="#4F46E5" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default ComparisonGraph;