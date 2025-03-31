import React from "react";
import { SyllabusItem } from "../../types";
import Card from "../UI/Card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const SyllabusAnalysis: React.FC<{ data: SyllabusItem[] }> = ({ data }) => {
  return (
    <Card title="Syllabus Wise Analysis">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis type="number" domain={[0, 100]} />
            <YAxis dataKey="topic" type="category" width={100} />
            <Tooltip />
            <Bar dataKey="percentage" fill="#10B981" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default SyllabusAnalysis;