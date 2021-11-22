import {
  ADD_TASK,
  REMOVE_TASK_BY_ID,
  TODO_FETCH_REQUESTED,
  TODO_FETCH_FAILED,
  UPDATE_TASK_BY_ID,
} from './types'

export const addTask = (task, completed = false, multiTask) => {
  return {
    type: ADD_TASK,
    payload: multiTask
      ? multiTask
      : {
          task,
          completed,
        },
  }
}

export const removeTaskById = (taskId) => ({
  type: REMOVE_TASK_BY_ID,
  payload: taskId,
})

export const updateTaskById = ({ payload }) => ({
  type: UPDATE_TASK_BY_ID,
  payload,
})

export const requestFetchTodo = () => ({
  type: TODO_FETCH_REQUESTED,
})

export const fetchTodoFailed = () => ({
  type: TODO_FETCH_FAILED,
})
