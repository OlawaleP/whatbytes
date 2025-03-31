import { SyllabusItem, TestResult } from "@/types";

export const TEST_DATA: TestResult = {
    title: "Hyper Text Markup Language",
    questions: 8,
    duration: "15 mins",
    submittedOn: "5 June 2021",
    rank: "Ranki Siddique",
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