import { useState } from "react";
import "./App.css";
import Account from "./FormFields/Account";
import AddressData from "./FormFields/AddressData";
import UserData from "./FormFields/UserData";
import useMultiStep from "./useMultiStep";
const initial = {
  name: "",
  lastName: "",
  age: "",
  city: "",
  country: "",
  state: "",
  email: "",
  password: "",
};
function App() {
  const [formData, setFormData] = useState(initial);
  const UpdateData = (data) => {
    setFormData((prev) => {
      return { ...prev, ...data };
    });
  };
  const { steps, step, currentStep, isFirstStep, isLastStep, next, back } =
    useMultiStep([
      <UserData {...formData} UpdateData={UpdateData} />,
      <AddressData {...formData} UpdateData={UpdateData} />,
      <Account {...formData} UpdateData={UpdateData} />,
    ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("That Your data");
    console.log(formData);
  };
  return (
    <div className="formContainer">
      <div className="counter">
        {currentStep + 1}/{steps}
      </div>
      <h1 className="Title">Form</h1>
      <form onSubmit={handleSubmit}>
        {step}

        <div className="control">
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
