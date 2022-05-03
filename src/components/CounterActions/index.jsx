import Styled from "./styles.module.css";

export const CounterActions = ({
  plusCounter,
  minusCounter,
  toggleResult,
  toggleResultBtnTextContent,
}) => {
  return (
    <div className={Styled["counter-actions-box"]}>
      <button className={Styled.btn} onClick={plusCounter}>
        +{" "}
      </button>
      <button className={Styled.btn} onClick={minusCounter}>
        -
      </button>
      <button className={Styled.btn} onClick={toggleResult}>
        {toggleResultBtnTextContent}
      </button>
    </div>
  );
};
