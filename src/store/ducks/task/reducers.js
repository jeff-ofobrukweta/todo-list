import {
  ADD_TASK,
  REMOVE_TASK_BY_ID,
  TODO_FETCH_FAILED,
  UPDATE_TASK_BY_ID,
} from './types'

const initialState = {
  taskList: [],
  showError: false,
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_TASK: {
      const newState = { ...state, showError: false }

      const id = Math.max(...state.taskList.map((i) => i.id)) + 1;
      // to add the payload to the state if it is an array we spread else if it is an object we just add it to the tasklist state

      if (payload.length && Array.isArray(payload)) {
        const newPayload = payload.map((item) => {
          return {
            id: item.id,
            completed: item.completed,
            task: item.title,
          }
        })
        newState.taskList = [...newState.taskList, ...newPayload]
      } else {
        newState.taskList = [...newState.taskList, { ...payload, id }]
      }
      return newState
    }

    case REMOVE_TASK_BY_ID: {
      const newState = { ...state }
      newState.taskList = newState.taskList.filter(({ id }) => id !== payload)
      return newState
    }

    case UPDATE_TASK_BY_ID: {
      const newState = { ...state }
      newState.taskList = newState.taskList.map((item) => {
        if (item.id === payload.id) {
          item = { ...item, ...payload }
        }
        return item
      })
      return newState
    }
    case TODO_FETCH_FAILED:
      return { ...state, showError: true }

    default:
      return state
  }
}
