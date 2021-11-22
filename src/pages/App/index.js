import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTaskById, requestFetchTodo, addTask } from 'store/ducks/task'
import {
  Container,
  InputContainer,
  Input,
  TodoListContainer,
  TodoContainer,
  Title,
  EmptyListMessage,
  AddButton,
  TaskItem,
  Error,
} from './styles'

const App = () => {
  const taskRef = useRef(null)
  const [task, setTask] = useState('')

  const dispatch = useDispatch()
  const { taskList, showError } = useSelector(({ Task }) => Task)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!task.trim()) return

    dispatch(addTask(task))
    setTask('')

    taskRef.current.focus()
  }

  const handleRemoveTask = (id) => {
    const removeTaskAction = removeTaskById(id)
    dispatch(removeTaskAction)
  }
  useEffect(() => {
    if (!taskList.length) {
      const fetchTodoAction = requestFetchTodo()
      dispatch(fetchTodoAction)
    }
  }, [])
  return (
    <Container>
      <TodoContainer onSubmit={handleSubmit}>
        <Title>Redux Saga Todo List</Title>

        <InputContainer>
          <Input
            ref={taskRef}
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add Task here"
          />
        </InputContainer>

        <AddButton type="submit">Add Task +</AddButton>

        {/* {!!showError && <Error text="Uer not found!" />} */}

        <TodoListContainer>
          {!taskList.length && (
            <EmptyListMessage>No Task to Show</EmptyListMessage>
          )}

          {taskList.map((taskItem) => {
            const { id, task } = taskItem
            const onRemove = () => handleRemoveTask(id)

            return (
              <TaskItem key={id} id={id} onRemoveClick={onRemove} task={task} />
            )
          })}
        </TodoListContainer>
      </TodoContainer>
    </Container>
  )
}

export default App
