import { Body } from "./Body";
import { Head } from "./Head";
import "./styles.css";

export const MainSection = ({ setTasks, tasks, getTasks }) => {


  /* Event handlers */

  return (
    <div className="main-section">
      <Head setTasks={setTasks} getTasks={getTasks} />
      <Body tasks={tasks} />
    </div>
  );
};
