import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";
import QuickStats from "../components/Dashboard/QuickStats";
import SyllabusAnalysis from "../components/Dashboard/SyllabusAnalysis";
import QuestionAnalysis from "../components/Dashboard/QuestionAnalysis";
import UpdateScoreModal from "../components/Dashboard/UpdateScoreModal";
import { SYLLABUS_DATA, TEST_DATA } from "@/utils/constant";
import ComparisonGraph from "@/components/Dashboard/ComparisionGraph";

const Dashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [testData, setTestData] = useState(TEST_DATA);

  const handleUpdateScores = (data: {
    rank?: string;
    percentile?: number;
    correctAnswers?: number;
  }) => {
    setTestData((prev) => ({
      ...prev,
      rank: data.rank || prev.rank,
      percentile: data.percentile || prev.percentile,
      correctAnswers: data.correctAnswers || prev.correctAnswers,
    }));
  };

  return (
    <>
      <Head>
        <title>WhatBytes - Dashboard</title>
        <meta name="description" content="Skill Test Dashboard" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="flex">
          <Sidebar />
          
          <main className="flex-1 p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">Skill Test</h2>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <span>{testData.title}</span>
                <span className="mx-2">•</span>
                <span>Questions: {testData.questions}</span>
                <span className="mx-2">•</span>
                <span>Duration: {testData.duration}</span>
                <span className="mx-2">•</span>
                <span>Submitted on {testData.submittedOn}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <QuickStats
                  data={testData}
                  onUpdateClick={() => setIsModalOpen(true)}
                />
              </div>
              
              <div className="lg:col-span-2 space-y-6">
                <ComparisonGraph data={testData} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SyllabusAnalysis data={SYLLABUS_DATA} />
                  <QuestionAnalysis data={testData} />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <UpdateScoreModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleUpdateScores}
        currentData={{
          rank: testData.rank,
          percentile: testData.percentile,
          correctAnswers: testData.correctAnswers,
          totalQuestions: testData.totalQuestions,
        }}
      />
    </>
  );
};

export default Dashboard;
