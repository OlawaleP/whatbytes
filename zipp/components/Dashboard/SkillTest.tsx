import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../UI/Button';
import SyllabusAnalysis from './SyllabusAnalysis';
import QuestionAnalysis from './QuestionAnalysis';
import UpdateScoreModal from './UpdateScoreModal';
import { TestResult } from '@/types';
import QuickStatistics from './QuickStats';
import ComparisonGraph from './ComparisionGraph';

interface SkillTestProps {
  initialData: TestResult;
  updatedData: TestResult;
}

const SkillTest = ({ initialData, updatedData }: SkillTestProps) => {
  const [testData, setTestData] = useState<TestResult>(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdate = () => {
    setIsModalOpen(true);
  };

  const handleUpdateScores = (data: { rank: number; percentile: number; currentScore: number }) => {
    setTestData({
      ...testData,
      rank: data.rank,
      percentile: data.percentile,
      correctAnswers: data.currentScore,
    });
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mb-6">Skill Test</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 relative">
                  <Image
                    src="/images/html5-logo.png"
                    alt="HTML5 Logo"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">{testData.title}</h2>
                  <p className="text-sm text-gray-500">
                    Questions: {testData.questions} | Duration: {testData.duration} mins | Submitted on {testData.submittedDate}
                  </p>
                </div>
              </div>
              <Button onClick={handleUpdate}>Update</Button>
            </div>

            <QuickStatistics 
              rank={testData.rank} 
              percentile={testData.percentile} 
              correctAnswers={testData.correctAnswers} 
              totalQuestions={testData.totalQuestions} 
            />
            
            <div className="mt-8">
              <ComparisonGraph percentile={testData.percentile} />
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <QuestionAnalysis 
              correctAnswers={testData.correctAnswers} 
              totalQuestions={testData.totalQuestions} 
            />
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <SyllabusAnalysis items={testData.syllabusAnalysis} />
        </div>
      </div>

      <UpdateScoreModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialValues={{
          rank: testData.rank,
          percentile: testData.percentile,
          currentScore: testData.correctAnswers,
        }}
        onUpdate={handleUpdateScores}
      />
    </div>
  );
};

export default SkillTest;