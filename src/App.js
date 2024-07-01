import { useState } from "react";

const msg = ["learn react", "Apply for job", "invest in your new income"];

export default function App() {
  let [step, setStep] = useState(1);

  function prev() {
    if (step > 1) setStep(step - 1);
  }

  function nex() {
    if (step < 3) setStep(step + 1);
  }
  return (
    <div className="body">
      <div className="overlay">
        <p className="x">❌</p>
        <div className="inner-container">
          <div className="inner">
            <div className="circle-container">
              <Circle name="1" colo={step === 1 ? "active" : ""} />
              <Circle name="2" colo={step === 2 ? "active" : ""} />
              <Circle name="3" colo={step === 3 ? "active" : ""} />
            </div>
            <Word step={step - 1} />
            <div className="rectangle-container">
              <Rectangle name="previous" click={prev} />
              <Rectangle name="next" click={nex} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Circle({ name, colo }) {
  return <p className={`circle  ${colo} `}>{name}</p>;
}

function Rectangle({ name, click }) {
  return (
    <p className="rectangle" onClick={click}>
      {name}
    </p>
  );
}

function Word({ step }) {
  return (
    <div className="word">
      step {step + 1}: {msg[step]}
    </div>
  );
}
