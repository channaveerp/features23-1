import React, { useState } from "react";
import "./Progress.css";

const steps = [
  {
    label: "Create an ad",

    nestedSteps: [
      {
        label: "Step 1 of Ad Creation",
        description: "Step 1 description for ad creation",
      },
      {
        label: "Step 2 of Ad Creation",
        description: "Step 2 description for ad creation",
      },
      {
        label: "Step 3 of Ad Creation",
        description: "Step 3 description for ad creation",
      },
    ],
  },
  {
    label: "Create an ad",

    nestedSteps: [
      {
        label: "Step 1 of Ad Creation",
        description: "Step 1 description for ad creation",
      },
      {
        label: "Step 2 of Ad Creation",
        description: "Step 2 description for ad creation",
      },
      {
        label: "Step 3 of Ad Creation",
        description: "Step 3 description for ad creation",
      },
    ],
  },
];

function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNestedNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="stepperContainer">
      <div className="progress">
        <div className="bar"></div>
        {steps.map((step, index) => (
          <React.Fragment key={step.label}>
            {index > 0 && <div className="stepLine"></div>}
            <div
              className={`progressStep ${index <= activeStep ? "completed" : ""}`}
            ></div>
          </React.Fragment>
        ))}
      </div>
      {steps.map((step, index) => (
        <div key={step.label}>
          <div className="stepLabel">{step.label}</div>
          <div className="stepDescription">
            <p>{step.nestedSteps[activeStep]?.description}</p>
          </div>
          {step.nestedSteps ? (
            <div>
              <div className="buttonContainer">
                <button
                  className="stepperButton"
                  onClick={
                    activeStep === step.nestedSteps.length - 1
                      ? handleNext
                      : handleNestedNext
                  }
                >
                  {activeStep === step.nestedSteps.length - 1
                    ? "Finish"
                    : "Continue"}
                </button>
                <button
                  className="stepperButton"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  Back
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="buttonContainer">
                <button
                  className="stepperButton"
                  onClick={
                    index === steps.length - 1 ? handleNext : handleNestedNext
                  }
                >
                  {index === steps.length - 1 ? "Finish" : "Continue"}
                </button>
                <button
                  className="stepperButton"
                  disabled={index === 0}
                  onClick={handleBack}
                >
                  Back
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
      {activeStep === steps.length && (
        <div className="stepActions">
          <p>All steps completed - you're finished</p>
          <button onClick={handleReset} className="stepperButton">
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

export default VerticalLinearStepper;
