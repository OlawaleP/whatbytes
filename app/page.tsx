"use client"

import { useState, useEffect } from "react";
import Head from "next/head";
import { SYLLABUS_DATA, TEST_DATA } from "@/utils/constant";
import { UpdateScoreModal, QuestionAnalysis, QuickStats, Sidebar, Header, ComparisionGraph, TestHeader, SyllabusAnalysis } from "@/components";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [testData, setTestData] = useState(TEST_DATA);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (sidebarOpen && !target.closest('aside') && !target.closest('button')) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <>
      <Head>
        <title>WhatBytes - Dashboard</title>
        <meta name="description" content="Skill Test Dashboard" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={sidebarOpen} />
        
        <div className="flex relative">
        
          {sidebarOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={() => setSidebarOpen(false)} />
          )}
          
          <Sidebar isOpen={sidebarOpen} />
          
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