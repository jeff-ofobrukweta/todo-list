import { takeEvery, put, call } from 'redux-saga/effects'
import { TODO_FETCH_REQUESTED } from './types'
import { addTask, fetchTodoFailed } from './actions'
import { server} from 'services'

export function* fetchTodos() {
  try {
    const { data } = yield call(server.get, `/todos?_limit=5`)
    const addTaskAction = addTask(null, null, data)
    yield put(addTaskAction)
  } catch (e) {
    yield put(fetchTodoFailed())
  }
}

export function* watchFetchTodo() {
  yield takeEvery(TODO_FETCH_REQUESTED, fetchTodos)
}
