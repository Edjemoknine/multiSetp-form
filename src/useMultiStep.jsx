import { useState } from "react";

const useMultiStep = (steps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const next = () => {
    setCurrentStep((prev) => {
      if (prev >= steps.length - 1) return prev;
      return prev + 1;
    });
  };
  const back = () => {
    setCurrentStep((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  };
  const goTo = (index) => {
    setCurrentStep(index);
  };

  return {
    currentStep,
    steps: steps.length,
    step: steps[currentStep],
    goTo,
    next,
    back,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
  };
};

export default useMultiStep;
