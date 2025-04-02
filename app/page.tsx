"use client"

import { useState } from "react";
import Head from "next/head";
import { SYLLABUS_DATA, TEST_DATA } from "@/utils/constant";
import { UpdateScoreModal, QuestionAnalysis, QuickStats, Sidebar, Header, ComparisionGraph, TestHeader, SyllabusAnalysis } from "@/components";

const Dashboard = () => {
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-6">
                <TestHeader 
                  data={testData} 
                  onUpdateClick={() => setIsModalOpen(true)} 
                />
                <QuickStats data={testData} />
                <ComparisionGraph data={testData} />
              </div>
              
              <div className="space-y-6">
                <SyllabusAnalysis data={SYLLABUS_DATA} />
                <QuestionAnalysis data={testData} />
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