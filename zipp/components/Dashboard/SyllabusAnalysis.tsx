import React from 'react';
import { SyllabusItem } from '@/types';
import Card from '../UI/Card';
import ProgressBar from '../UI/ProgressBar';

interface SyllabusAnalysisProps {
  items: SyllabusItem[];
}

const SyllabusAnalysis = ({ items }: SyllabusAnalysisProps) => {
  // Function to determine color based on score
  const getColorByScore = (score: number) => {
    if (score >= 80) return 'blue-500';
    if (score >= 60) return 'orange-500';
    if (score >= 40) return 'red-500';
    return 'green-500';
  };

  return (
    <Card className="p-6">
      <h3 className="font-medium text-lg mb-6">Syllabus Wise Analysis</h3>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{item.name}</span>
              <span className="font-medium">{item.score}%</span>
            </div>
            <ProgressBar value={item.score} color={getColorByScore(item.score)} />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SyllabusAnalysis;