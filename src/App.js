import { useState } from "react";

import logo from "./assets/investment-calculator-logo.png";
import Form from "./Components/Form";
import ColumnTables from "./Components/ColumnTables";

function App() {
  const [formData, setFormData] = useState("");

  const calculateHandler = (userInput) => {
    const yearlyData = [];
    let currentSavings = +userInput["saving"];

    const yearlyContribution = +userInput["contribution"];
    const expectedReturn = +userInput["return"] / 100;
    const duration = +userInput["durationValue"];

    let totalInterest = 0;
    // // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest = totalInterest + yearlyInterest;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: +yearlyInterest.toFixed(2),
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest: +totalInterest.toFixed(2),
      });

      setFormData(yearlyData);
    }

    // do something with yearlyData ...
  };
  console.log(formData);
  return (
    <div>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <Form onSubmitHandler={calculateHandler}></Form>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((year) => {
            return <ColumnTables data={year}> </ColumnTables>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
