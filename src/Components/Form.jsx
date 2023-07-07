import { useState } from "react";
import logo from "../assets/investment-calculator-logo.png";

const Form = function ({ onSubmitHandler }) {
  const [currentSaving, setCurrentSaving] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  const onChangeCurrentSaving = (e) => {
    setCurrentSaving(e.target.value);
  };
  const onChangeYearlyContribution = (e) => {
    setYearlyContribution(e.target.value);
  };
  const onChangeExpectedReturn = (e) => {
    setExpectedReturn(e.target.value);
  };
  const onChangeDuration = (e) => {
    setDuration(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInput = {
      saving: +currentSaving,
      contribution: +yearlyContribution,
      return: +expectedReturn,
      durationValue: +duration,
    };

    onSubmitHandler(userInput);
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={onChangeCurrentSaving}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={onChangeYearlyContribution}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={onChangeExpectedReturn}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={onChangeDuration} />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default Form;
