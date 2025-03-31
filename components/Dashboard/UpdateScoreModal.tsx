import React, { useState } from "react";
import { UpdateScoreData } from "../../types";
import Card from "../UI/Card";
import Button from "../UI/Button";

interface UpdateScoreModalProps {
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

const UpdateScoreModal: React.FC<UpdateScoreModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  currentData,
}) => {
  const [formData, setFormData] = useState<UpdateScoreData>({
    rank: currentData.rank,
    percentile: currentData.percentile,
    correctAnswers: currentData.correctAnswers,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rank" ? value : Number(value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4">Update Scores</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Rank</label>
            <input
              type="text"
              name="rank"
              value={formData.rank}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Percentile (0-100)
            </label>
            <input
              type="number"
              name="percentile"
              min="0"
              max="100"
              value={formData.percentile}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Correct Answers (0-{currentData.totalQuestions})
            </label>
            <input
              type="number"
              name="correctAnswers"
              min="0"
              max={currentData.totalQuestions}
              value={formData.correctAnswers}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default UpdateScoreModal;