import { FormEvent } from "react";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import UserInfoForm from './components/UserInfoForm';
import AddressForm from "./components/AddressForm";
import MessageForm from './components/MessageForm';

function App() {
  const { step, steps, isFirstStep, isLastStep, currentStepIndex, back, next } = useMultiStepForm([
    <UserInfoForm />,
    <AddressForm />,
    <MessageForm />,
  ])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    console.log("submit")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>{currentStepIndex + 1} / {steps.length} </div>
      {step}
      {!isFirstStep && <button type="button" onClick={back}>back</button>}
      {isLastStep ? <button type="button" onClick={handleSubmit}>submit</button> : <button type="button" onClick={next}>next</button>}
    </form>
  );
}

export default App;
