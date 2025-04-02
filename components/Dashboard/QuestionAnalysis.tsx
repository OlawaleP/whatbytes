import React from "react";
import { TestResult } from "../../types";
import Card from "../UI/Card";

const QuestionAnalysis: React.FC<{ data: TestResult }> = ({ data }) => {
  const correctAnswers = data.correctAnswers;
  const totalQuestions = data.totalQuestions;
  const percentage = (correctAnswers / totalQuestions) * 100;
  
  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  
  const dashOffset = circumference - (circumference * percentage) / 100;

  return (
    <Card>
      <div className="relative flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900">Question Analysis</h2>
          <div className="text-blue-600 font-bold text-percentValue">
            {correctAnswers}/{totalQuestions}
          </div>
        </div>
        
        <p className="text-gray-600 text-lg mb-8">
          <span className="font-bold">You scored {correctAnswers} question correct out of {totalQuestions}.</span> However it still needs some improvements
        </p>
        
        <div className="flex justify-center my-4">
          <div className="relative w-60 h-60">
            <svg className="w-full h-full" viewBox="0 0 300 300">
              <circle
                cx="150"
                cy="150"
                r={radius}
                fill="none"
                stroke="#E6EFF9"
                strokeWidth="32"
              />
              <circle
                cx="150"
                cy="150"
                r={radius}
                fill="none"
                stroke="#4B83F0"
                strokeWidth="32"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                strokeLinecap="square"
                transform="rotate(90 150 150)"
              />
            </svg>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg viewBox="0 0 50 50" className="w-10 h-10">
                  <circle cx="25" cy="25" r="20" fill="#C73A3A" />
                  <circle cx="25" cy="25" r="15" fill="#EB5757" />
                  <circle cx="25" cy="25" r="10" fill="#C73A3A" />
                  <circle cx="25" cy="25" r="5" fill="#EB5757" />
                  <path
                    d="M40 10 L25 25"
                    stroke="#4ECEE6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M45 5 L40 10"
                    stroke="#4ECEE6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M39 6 L44 11"
                    stroke="#4ECEE6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default QuestionAnalysis;