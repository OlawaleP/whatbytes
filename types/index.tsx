// Types section
export interface TestResult {
  id: string;
  title: string;
  logo: string;
  questions: number;
  duration: number;
  submittedDate: string;
  rank: number;
  percentile: number;
  correctAnswers: number;
  totalQuestions: number;
  syllabusAnalysis: SyllabusItem[];
}

export interface SyllabusItem {
  name: string;
  score: number;
}

export interface UpdateScoresData {
  rank: number;
  percentile: number;
  currentScore: number;
}

// Fix 2: Define a proper interface for ModalProps that includes initialValues
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialValues: UpdateScoresData;
  onUpdate: (data: UpdateScoresData) => void;
}