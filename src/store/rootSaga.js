import { all } from 'redux-saga/effects'
import { watchFetchTodo } from './ducks/task'

export default function* rootSaga() {
  yield all([
    watchFetchTodo(),
  ])
}
