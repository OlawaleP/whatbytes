import React from "react";
import { SyllabusItem } from "../../types";
import Card from "../UI/Card";

const getColorClass = (percentage: number): string => {
  if (percentage >= 81) return "bg-green-400";
  if (percentage >= 61) return "bg-blue-400";
  if (percentage >= 41) return "bg-orange-400";
  return "bg-red-400";
};

const getTrackColorClass = (percentage: number): string => {
  if (percentage >= 81) return "bg-green-100";
  if (percentage >= 61) return "bg-blue-100";
  if (percentage >= 41) return "bg-orange-100";
  return "bg-red-100";
};

const getTextColorClass = (percentage: number): string => {
  if (percentage >= 81) return "text-green-500";
  if (percentage >= 61) return "text-blue-500";
  if (percentage >= 41) return "text-orange-500";
  return "text-red-500";
};

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  const colorClass = getColorClass(percentage);
  const trackColorClass = getTrackColorClass(percentage);
  
  return (
    <div className={`w-full ${trackColorClass} rounded-full h-3`}>
      <div
        className={`${colorClass} h-3 rounded-full`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

interface SyllabusItemProps {
  item: SyllabusItem;
}

const SyllabusItemRow: React.FC<SyllabusItemProps> = ({ item }) => {
  const textColorClass = getTextColorClass(item.percentage);
  
  return (
    <div className="mb-8">
      <div className="text-gray-600 text-lg mb-2">{item.topic}</div>
      <div className="flex items-center gap-4">
        <div className="flex-grow">
          <ProgressBar percentage={item.percentage} />
        </div>
        <div className={`text-percentValue font-bold ${textColorClass}`}>
          {item.percentage}%
        </div>
      </div>
    </div>
  );
};

const SyllabusAnalysis: React.FC<{ data: SyllabusItem[] }> = ({ data }) => {
  return (
    <Card>
        <div className="flex flex-col px-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900">Syllabus Wise Analysis</h2>
      
        </div>
      <div className="py-4">
        {data.map((item, index) => (
          <SyllabusItemRow key={index} item={item} />
        ))}
      </div>
      </div>
    </Card>
  );
};

export default SyllabusAnalysis;