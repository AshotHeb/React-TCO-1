import "./styles.css";

export const Aside = (props) => {
  const isOpen = props.isOpen ? "aside open" : "aside";
  return <div className={isOpen}></div>;
};
