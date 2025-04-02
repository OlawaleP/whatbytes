import { TestResult } from "@/types";
import { Button, Card } from "..";

interface TestHeaderProps {
  data: TestResult;
  onUpdateClick: () => void;
}

const TestHeader: React.FC<TestHeaderProps> = ({ data, onUpdateClick }) => {
  return (
    <Card>
        <div className="flex items-center text-sm mt-1 justify-between">
          <div className="mr-4">
            <img 
              src="/html-5.svg"
              alt="Test Icon"
              className="w-12 h-12" 
            />
          </div>
          
          <div>
            <span className="font-semibold text-textPrimary text-lg">{data.title}</span>
            <div>
              <span>Questions: {data.questions}</span>
              <span className="mx-1">|</span>
              <span>Duration: {data.duration}</span>
              <span className="mx-1">|</span>
              <span>Submitted on {data.submittedOn}</span>
            </div>
          </div>

          <Button onClick={onUpdateClick} className="ml-4">
            Update
          </Button>
        </div>
    </Card>
  );
};

export default TestHeader;
