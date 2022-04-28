import "./styles.css";

export const Actions = ({ plusCount, minusCount }) => {
  return (
    <div>
      <button className="btn" onClick={plusCount}>
        +
      </button>
      <button className="btn" onClick={minusCount}>
        -
      </button>
    </div>
  );
};
