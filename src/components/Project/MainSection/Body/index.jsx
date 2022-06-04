import { useCallback } from "react";

import { useState } from "react";
import { Button } from "reactstrap";
import { CardComponent } from "../../CardComponent";
import "./styles.css";
import { BACKEND_URL } from "../../../../consts";
import { connect } from "react-redux";
import { removeMultipleTasksAction } from "../../../../redux/actions/task-actions";

const ConnectedBody = ({ tasks, setTasks, removeMultipleTasks }) => {
  const [deletedTasksSet, setDeletedTasksSet] = useState(new Set());

  const toggleDeletedTask = useCallback((_id) => {
    setDeletedTasksSet((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(_id)) {
        newSet.delete(_id);
      } else {
        newSet.add(_id);
      }
      return newSet;
    });
  }, []);

  const handleBatchDelete = () => {
    const batchDelTasks = Array.from(deletedTasksSet);
    fetch(`${BACKEND_URL}/task`, {
      method: "PATCH",
      body: JSON.stringify({
        tasks: batchDelTasks,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        removeMultipleTasks(batchDelTasks)
      });
  };

  return (
    <>
      <div>
        {!!deletedTasksSet.size && (
          <Button color="danger" onClick={handleBatchDelete}>
            Delete All
          </Button>
        )}
      </div>
      <div className="main-section-body">
        {tasks.map((todo) => {
          return (
            <CardComponent
              key={todo._id}
              todo={todo}
              toggleDeletedTask={toggleDeletedTask}
            />
          );
        })}
      </div>
    </>
  );
};


const mapStateToProps = (state) => ({
  tasks: state.taskReducerState.tasks
})
const mapDispatchToProps = (dispatch) => ({
  removeMultipleTasks: (deletedTasksIds) => dispatch(removeMultipleTasksAction(deletedTasksIds))
  // {type:'REMOVE_MULTIPLE_TASKS' , payload:deletedTasksIds}
})

export const Body = connect(mapStateToProps, mapDispatchToProps)(ConnectedBody)
