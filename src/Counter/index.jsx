import { useState } from "react";
import { Actions } from "./Actions";
import { Result } from "./Result";
import "./styles.css";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const plusCount = () => {
    setCounter(counter + 1);
  };

  const minusCount = () => {
    setCounter(counter - 1);
  };

  const childProps = (props) => {
    console.log("🚀 ~ props", props);
  };
  return (
    <div className="counter-section">
      <h2 className="section-heading">Counter Component</h2>
      <Actions plusCount={plusCount} minusCount={minusCount} />
      <Result counter={counter} test={"Test"} childProps={childProps} />
    </div>
  );
};
