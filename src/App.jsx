import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput";
import React, { useState } from "react";

const columns = [
  { key: "year", label: "Year" },
  { key: "Investment Value", label: "Investment Value" },
  { key: "Interest (Year)", label: "Interest (Year)" },
  { key: "Total Interest", label: "Total Interest" },
  { key: "Invested Capital", label: "Invested Capital" },
];


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1; 

  

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { 
        ...prevUserInput, 
        [inputIdentifier]: +newValue };
    });
  }


  return (
    <main className="content">
      <Header
        title="Investment Calculator"
        logo="/investment-calculator-logo.png"
        links={[{ key: "home", href: "/", label: "Home" }]}
      />
      <UserInput onChange={handleChange} userInput={userInput}/>
      {!inputIsValid && <p className="error-text">Please enter a valid duration (minimum 1 year)</p>}

      {inputIsValid && <Results input={userInput} />}
    </main>
  );
}

export default App;
