import { TestResult } from "@/types";
import { Button, Card } from "..";

interface TestHeaderProps {
  data: TestResult;
  onUpdateClick: () => void;
}

const TestHeader: React.FC<TestHeaderProps> = ({ data, onUpdateClick }) => {
  return (
    <Card>
      <div className="flex flex-col sm:flex-row sm:items-center text-sm mt-1 space-y-4 sm:space-y-0 sm:justify-between">
        <div className="flex items-center">
          <div className="mr-4">
            <img 
              src="/html-5.svg"
              alt="Test Icon"
              className="w-10 h-10 sm:w-12 sm:h-12" 
            />
          </div>
          
          <div className="flex-1">
            <span className="font-semibold text-textPrimary text-base sm:text-lg block sm:inline">{data.title}</span>
            <div className="flex flex-wrap mt-1 sm:mt-0">
              <span>Questions: {data.questions}</span>
              <span className="hidden sm:inline mx-1">|</span>
              <span className="w-full sm:w-auto sm:mx-0">Duration: {data.duration}</span>
              <span className="hidden sm:inline mx-1">|</span>
              <span className="w-full sm:w-auto sm:mx-0">Submitted on {data.submittedOn}</span>
            </div>
          </div>
        </div>

        <Button onClick={onUpdateClick} className="self-center sm:self-center sm:ml-4">
          Update
        </Button>
      </div>
    </Card>
  );
};

export default TestHeader;