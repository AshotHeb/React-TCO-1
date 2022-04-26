import "./styles.css";

export const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imgUrl} alt="" className="card-img" />
      <p className="card-text">{props.text}</p>
    </div>
  );
};
