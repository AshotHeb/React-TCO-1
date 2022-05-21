import "./styles.css";
import { HeadRight } from "./HeadRight";
export const Head = ({ setTasks, getTasks }) => {
  return (
    <div className="main-section-head">
      <HeadRight setTasks={setTasks} getTasks={getTasks} />
    </div>
  );
};
