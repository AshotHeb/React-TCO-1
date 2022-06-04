export const setTasksAction = (tasks) => {
    return {
        type: 'SET_TASKS',
        payload: tasks
    }
}

export const removeMultipleTasksAction = (tasksIds) => {
    return {
        type: 'REMOVE_MULTIPLE_TASKS',
        payload: tasksIds
    }
}

export const addNewTaskAction = (newTask) => {
    return {
        type: 'ADD_NEW_TASK',
        payload: newTask
    }
}