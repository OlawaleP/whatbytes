import { ReactNode } from "react";

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


export interface UpdateScoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: UpdateScoreData) => void;
  currentData: {
    rank: string;
    percentile: number;
    correctAnswers: number;
    totalQuestions: number;
  };
}

export interface FormFieldProps {
  number: number;
  label: string;
  boldText: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "number";
  min?: number;
  max?: number;
}


export interface FormFieldProps {
  number: number;
  label: string;
  boldText: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "number";
  min?: number;
  max?: number;
}

export interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export interface CardProps {
  children: ReactNode;
  className?: string;
}