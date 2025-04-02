import { SyllabusItem, TestResult } from "@/types";

export const TEST_DATA: TestResult = {
  title: "Hyper Text Markup Language",
  questions: 8,
  duration: "15 mins",
  submittedOn: "5 June 2021",
  rank: "1",
  percentile: 30,
  correctAnswers: 10,
  totalQuestions: 15,
  averagePercentile: 72,
};

export const SYLLABUS_DATA: SyllabusItem[] = [
  { topic: "HTML Tools, Forms, History", percentage: 80 },
  { topic: "Tags & References in HTML", percentage: 60 },
  { topic: "Tables & References in HTML", percentage: 24 },
  { topic: "Tables & CSS Basics", percentage: 96 },
];

export const distributionData = [
  { percentile: 0, frequency: 5 },
  { percentile: 10, frequency: 10 },
  { percentile: 20, frequency: 15 },
  { percentile: 25, frequency: 20 },
  { percentile: 30, frequency: 30 },
  { percentile: 35, frequency: 40 },
  { percentile: 40, frequency: 50 },
  { percentile: 45, frequency: 60 },
  { percentile: 50, frequency: 70 },
  { percentile: 55, frequency: 60 },
  { percentile: 60, frequency: 45 },
  { percentile: 70, frequency: 25 },
  { percentile: 80, frequency: 15 },
  { percentile: 90, frequency: 20 }, 
  { percentile: 95, frequency: 15 },
  { percentile: 100, frequency: 10 },
];
