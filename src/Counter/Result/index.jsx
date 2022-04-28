import "./styles.css";

export const Result = ({ counter, test, childProps }) => {
  // console.log("🚀 ~ Render");

  // const mouseDownHandler = (e) => console.log("mouseDownHandler", e);
  // const mouseMoveHandler = (e) => console.log("mouseMoveHandler", e);
  const onClickHandler = ({ target }) => {
    childProps({
      childPTextContent: target.textContent,
    });
  };

  return (
    <p
      className="counter-result"
      // onMouseDown={mouseDownHandler}
      // onMouseMove={mouseMoveHandler}
      onClick={onClickHandler}
    >
      Result :: <span className="count">{counter}</span>{" "}
    </p>
  );
};
