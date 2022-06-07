import { useCallback } from "react";

import { useState } from "react";
import { Button } from "reactstrap";
import { CardComponent } from "../../CardComponent";
import "./styles.css";
import { connect } from "react-redux";
import { removeMultipleTasksThunk } from "../../../../redux/actions/task-actions";

const ConnectedBody = ({ tasks, removeMultipleTasks }) => {
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
    removeMultipleTasks(batchDelTasks);
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
  tasks: state.taskReducerState.tasks,
});
const mapDispatchToProps = (dispatch) => ({
  removeMultipleTasks: (deletedTasksIds) =>
    dispatch(removeMultipleTasksThunk(deletedTasksIds)),
});

export const Body = connect(mapStateToProps, mapDispatchToProps)(ConnectedBody);
