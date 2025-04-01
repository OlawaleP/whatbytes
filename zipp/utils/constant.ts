import { TestResult } from '../types';

export const initialTestData: TestResult = {
  id: '1',
  title: 'Hyper Text Markup Language',
  logo: '/images/html5-logo.png',
  questions: 8,
  duration: 15,
  submittedDate: '5 June 2021',
  rank: 1,
  percentile: 30,
  correctAnswers: 10,
  totalQuestions: 15,
  syllabusAnalysis: [
    { name: 'HTML Tools, Forms, History', score: 80 },
    { name: 'Tags & References in HTML', score: 60 },
    { name: 'Tables & References in HTML', score: 24 },
    { name: 'Tables & CSS Basics', score: 96 },
  ],
};

export const updatedTestData: TestResult = {
  ...initialTestData,
  rank: 4,
  percentile: 90,
  correctAnswers: 12,
};