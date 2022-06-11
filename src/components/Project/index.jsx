import { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getTasksRequest } from "../../api";
import { generateQuery } from "../../helpers";
import { FilterSection } from "./FilterSection";
import { MainSection } from "./MainSection";
import { setTasksAction } from '../../redux/actions/task-actions'
import "./styles.css";

const ConnectedProject = ({ setTasks }) => {
  /* Local State */
  const [queryObject, setQueryObject] = useState({});

  /* useEffects */
  useEffect(() => {
    const query = generateQuery(queryObject);

    getTasksRequest(query).then((data) => {

      if (data.errors) {
        throw data.errors
      }
      setTasks(data)
    })
      .catch(err => {
        console.log("🚀 ~ err", err)

      })
  }, [queryObject]);

  /* cashed callbacks */
  const setFilterField = useCallback((filterEntries) => {
    const [name, value] = filterEntries;

    setQueryObject((prev) => {
      if (!value) {
        const newQueryObject = { ...prev };
        delete newQueryObject[name];
        return newQueryObject;
      }

      if (prev[name] !== value) {
        return {
          ...prev,
          [name]: value,
        };
      }
    });
  }, []);

  return (
    <div className="project-layout">
      <FilterSection setFilterField={setFilterField} />
      <MainSection
        setTasks={setTasks}
        setFilterField={setFilterField}
      />
    </div>
  );
};



export const Project = connect(null, {
  setTasks: setTasksAction
})(ConnectedProject)
