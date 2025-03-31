import React from "react";
import { TestResult } from "../../types";
import Card from "../UI/Card";
import Button from "../UI/Button";

interface QuickStatsProps {
  data: TestResult;
  onUpdateClick: () => void;
}

const QuickStats: React.FC<QuickStatsProps> = ({ data, onUpdateClick }) => {
  return (
    <Card title="Quick Statistics">
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">YOUR RANK</p>
          <p className="text-lg font-medium">{data.rank}</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-500">PERCENTILE</p>
          <p className="text-2xl font-bold text-primary">{data.percentile}%</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-500">CORRECT ANSWERS</p>
          <p className="text-2xl font-bold">
            {data.correctAnswers} / {data.totalQuestions}
          </p>
        </div>
        
        <Button onClick={onUpdateClick} className="w-full">
          Update Scores
        </Button>
      </div>
    </Card>
  );
};

export default QuickStats;