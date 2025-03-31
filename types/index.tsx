export type TestResult = {
    title: string;
    questions: number;
    duration: string;
    submittedOn: string;
    rank: string;
    percentile: number;
    correctAnswers: number;
    totalQuestions: number;
    averagePercentile: number;
  };
  
  export type SyllabusItem = {
    topic: string;
    percentage: number;
  };
  
  export type UpdateScoreData = {
    rank?: string;
    percentile?: number;
    correctAnswers?: number;
  };