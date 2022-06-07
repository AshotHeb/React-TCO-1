import { getTasksRequest } from "../../api";
import { BACKEND_URL } from "../../consts";

export const setTasksAction = (tasks) => {
  return {
    type: "SET_TASKS",
    payload: tasks,
  };
};

export const removeMultipleTasksAction = (tasksIds) => {
  return {
    type: "REMOVE_MULTIPLE_TASKS",
    payload: tasksIds,
  };
};

export const addNewTaskAction = (newTask) => {
  return {
    type: "ADD_NEW_TASK",
    payload: newTask,
  };
};

/* 
Redux thunks
*/

export const getTasksThunk = (query) => (dispatch, getState) => {
  getTasksRequest(query).then((data) => {
    dispatch(setTasksAction(data));
  });
};

export const addNewTaskThunk =
  (formData, onSubmitCallback) => (dispatch, getState) => {
    fetch(`${BACKEND_URL}/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(addNewTaskAction(data));
        onSubmitCallback();
      });
  };

export const removeMultipleTasksThunk =
  (batchDelTasks) => (dispatch, getState) => {
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
        dispatch(removeMultipleTasksAction(batchDelTasks));
      });
  };
