import React, { useState, useEffect } from "react";
import { UpdateScoreData, UpdateScoreModalProps } from "../../types";
import { ArrowRightIcon, Button, Card, FormField } from "..";

const UpdateScoreModal: React.FC<UpdateScoreModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  currentData,
}) => {
  const [formData, setFormData] = useState<UpdateScoreData>({
    rank: "",
    percentile: 0,
    correctAnswers: 0,
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({
        rank: currentData.rank || "",
        percentile: currentData.percentile || 0,
        correctAnswers: currentData.correctAnswers || 0,
      });
    }
  }, [isOpen, currentData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value === "" ? "" : name === "rank" ? value : Number(value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  const formFields = [
    {
      number: 1,
      label: "Update your",
      boldText: "Rank",
      name: "rank",
      value: formData.rank,
      type: "text"
    },
    {
      number: 2,
      label: "Update your",
      boldText: "Percentile",
      name: "percentile",
      value: formData.percentile,
      type: "number",
      min: 0,
      max: 100
    },
    {
      number: 3,
      label: "Update your",
      boldText: "Current Score (out of 15)",
      name: "correctAnswers",
      value: formData.correctAnswers,
      type: "number",
      min: 0,
      max: currentData.totalQuestions
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Update Scores</h3>
          <img 
            src="/html-5.svg"
            alt="Test Icon"
            className="w-6 h-6" 
          />
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {formFields.map((field) => (
            <FormField
              key={field.name}
              number={field.number}
              label={field.label}
              boldText={field.boldText}
              name={field.name}
              value={field.value as 'text' | 'number'}
              onChange={handleChange}
              type={field.type as 'text' | 'number'}
              min={field.min}
              max={field.max}
            />
          ))}
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="secondary" onClick={onClose}>
              cancel
            </Button>
            <Button 
              type="submit" 
              className="flex items-center border border-black focus:ring-black"
            >
              save <ArrowRightIcon />
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default UpdateScoreModal;