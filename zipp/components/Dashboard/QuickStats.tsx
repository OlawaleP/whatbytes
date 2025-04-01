import React from 'react';

interface QuickStatisticsProps {
  rank: number;
  percentile: number;
  correctAnswers: number;
  totalQuestions: number;
}

const QuickStatistics = ({
  rank,
  percentile,
  correctAnswers,
  totalQuestions,
}: QuickStatisticsProps) => {
  return (
    <div>
      <h3 className="font-medium text-lg mb-4">Quick Statistics</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-amber-500">🏆</span>
            </div>
            <div>
              <div className="text-2xl font-semibold">{rank}</div>
              <div className="text-xs text-gray-500">YOUR RANK</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-gray-500 text-xs">📄</span>
            </div>
            <div>
              <div className="text-2xl font-semibold">{percentile}%</div>
              <div className="text-xs text-gray-500">PERCENTILE</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-green-500 text-xs">✓</span>
            </div>
            <div>
              <div className="text-2xl font-semibold">
                {correctAnswers} / {totalQuestions}
              </div>
              <div className="text-xs text-gray-500">CORRECT ANSWERS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStatistics;