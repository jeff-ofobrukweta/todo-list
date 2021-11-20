import {
  ADD_TASK,
  REMOVE_TASK_BY_ID,
  TODO_FETCH_REQUESTED,
  TODO_FETCH_FAILED,
} from './types'

export const addTask = (task, completed = false, multiTask) => {
  const id = new Date().getTime()

  return {
    type: ADD_TASK,
    payload: multiTask ? multiTask : {
      id,
      task,
      completed
    },
  }
}

export const removeTaskById = (taskId) => ({
  type: REMOVE_TASK_BY_ID,
  payload: taskId
})

export const requestFetchTodo = () => ({
  type: TODO_FETCH_REQUESTED
})

export const fetchTodoFailed = () => ({
  type: TODO_FETCH_FAILED,
})
