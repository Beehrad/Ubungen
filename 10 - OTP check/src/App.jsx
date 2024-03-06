import { useState } from "react";
import "./App.css";
import LoginForm from "./Form/LoginForm";
import ValidateForm from "./Form/ValidateForm";

function App() {
  const [mobile, setMobile] = useState("");
  const [step, setStep] = useState(1);

  return (
    <div className="container w-full m-auto">
      {step == 1 ? (
        <LoginForm mobile={mobile} setMobile={setMobile} setStep={setStep} />
      ) : (
        <ValidateForm mobile={mobile} setMobile={setMobile} />
      )}
    </div>
  );
}

export default App;
