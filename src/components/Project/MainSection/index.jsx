import { Body } from "./Body";
import { Head } from "./Head";
import "./styles.css";

export const MainSection = ({ setTasks, setFilterField }) => {

  return (
    <div className="main-section">
      <Head setTasks={setTasks} setFilterField={setFilterField} />
      <Body setTasks={setTasks} />
    </div>
  );
};
