import React from "react";
import { TestResult } from "../../types";
import Card from "../UI/Card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const QuestionAnalysis: React.FC<{ data: TestResult }> = ({ data }) => {
  const pieData = [
    { name: "Correct", value: data.correctAnswers },
    { name: "Incorrect", value: data.totalQuestions - data.correctAnswers },
  ];

  const COLORS = ["#10B981", "#EF4444"];

  return (
    <Card title="Question Analysis">
      <p className="mb-4">
        You scored {data.correctAnswers} questions correct out of {data.totalQuestions}. However it
        still needs some improvements
      </p>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default QuestionAnalysis;