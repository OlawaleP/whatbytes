import React, { useState, useEffect } from "react";
import { FormFieldProps } from "../../types";

const FormField: React.FC<FormFieldProps> = ({
  number,
  label,
  boldText,
  name,
  value,
  onChange,
  type = "text",
  min,
  max
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [touched, setTouched] = useState(false);
  const [isEmpty, setIsEmpty] = useState(value === "" || value === null || value === undefined);

  useEffect(() => {
    setIsEmpty(value === "" || value === null || value === undefined);
  }, [value]);

  const isValid = () => {
    if (isEmpty) return false; 
    
    switch(name) {
      case "rank": 
        return !isNaN(Number(value));
      case "percentile": 
        return !isNaN(Number(value)) && Number(value) >= 0 && Number(value) <= 100;
      case "correctAnswers": 
        return !isNaN(Number(value)) && Number(value) >= 0 && Number(value) <= (max || 15);
      default: 
        return true;
    }
  };
  
  const getPlaceholder = () => {
    switch(name) {
      case "rank": return "Rank";
      case "percentile": return "Percentile";
      case "correctAnswers": return "Current Score";
      default: return "";
    }
  };
  
  const getValidationMessage = () => {
    switch(name) {
      case "rank": return "required | should be a number";
      case "percentile": return "required | percentile 0-100";
      case "correctAnswers": return `required | 0-${max || 15}`;
      default: return "";
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    setTouched(true);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    const newValue = e.target.value;
    setIsEmpty(newValue === "" || newValue === null || newValue === undefined);
  };

  const showValidationMessage = (touched || isFocused) && !isValid();

  const inputStyle = isValid() 
    ? "border-blue-700 ring-1 ring-blue-700" 
    : "border-red-500 ring-1 ring-red-500";

  return (
    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
      <div className="flex items-center gap-2">
        <span className="border border-white w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-900 text-white">
          {number}
        </span>
        <label className="block text font-medium text-gray-700">
          {label} <span className="font-bold">{boldText}</span>
        </label>
      </div>
      <div className="relative w-full sm:w-40">
        <div className={`relative transition-transform duration-200 ${isFocused ? '-translate-x-8' : ''}`}>
          <input
            type={type}
            name={name}
            value={value}
            onChange={handleInputChange}
            placeholder={getPlaceholder()}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={`p-2 border rounded font-bold w-full ${inputStyle}`}
            min={min}
            max={max}
          />
          
          {showValidationMessage && (
            <p className="absolute left-0 -bottom-3.5 text-red-500 font-semibold text-errorText">
              {getValidationMessage()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormField;