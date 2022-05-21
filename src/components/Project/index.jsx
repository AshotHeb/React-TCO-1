import { useCallback, useEffect, useRef, useState } from "react";
import { getTasksRequest } from "../../api";
import { FilterSection } from "./FilterSection";
import { MainSection } from "./MainSection";
import "./styles.css";

export const Project = () => {
  /* Local State */
  const [tasks, setTasks] = useState([]);

  /* useEffects */
  useEffect(() => {
    getTasksRequest().then((data) => {
      setTasks(data);
    });
  }, []);

  /* cashed callbacks */
  const getTasksClosure = useCallback((() => {
    let query = ''


    return function (filterEntries) {
      // ['sort' , 'creation_date_oldest']
      //['search' ,'aaa']

      const [name, value] = filterEntries
      if (query.includes(name)) {
        const regExp = new RegExp(`${name}=.+\b&`)
        const newOperation = `${name}=${value}&`
        query = query.replace(regExp, newOperation)
      } else {
        query += `${name}=${value}&`
      }
      console.log("🚀 ~ query", query)



      getTasksRequest(query).then((data) => {
        setTasks(data);
      });
    }

  })(), [])



  return (
    <div className="project-layout">
      <FilterSection tasks={tasks} setTasks={setTasks} />
      <MainSection tasks={tasks} setTasks={setTasks} getTasks={getTasksClosure} />
    </div>
  );
};
