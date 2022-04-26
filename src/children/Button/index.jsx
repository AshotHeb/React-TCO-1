import "./styles.css";

export const Button = (props) => {
  return (
    <button
      className="button-primary"
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
