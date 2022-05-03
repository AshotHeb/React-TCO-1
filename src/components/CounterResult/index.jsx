import "./styles.css";

export const CounterResult = ({ counter }) => {
  return (
    <div className="counter-result-box">
      <span>Result :: {counter}</span>
    </div>
  );
};
