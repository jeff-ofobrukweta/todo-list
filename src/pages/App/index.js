import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTaskById, requestFetchTodo, addTask } from 'store/ducks/task'
import { updateTaskById } from 'store/ducks/task/actions'
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
} from './styles'

const App = () => {
  const taskRef = useRef(null)
  const [task, setTask] = useState('')

  const dispatch = useDispatch()
  const { taskList } = useSelector(({ Task }) => Task)

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

  const handleCompletedStatus = (id, completed) => {
    dispatch(
      updateTaskById({
        payload: { id, completed: !completed },
      }),
    )
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

        <AddButton
          disabled={!task.trim().length ? 'disabled' : ''}
          type="submit"
        >
          Add Task +
        </AddButton>

        {/* {!!showError && <Error text="Uer not found!" />} */}

        <TodoListContainer>
          {!taskList.length && (
            <EmptyListMessage>No Task to Show</EmptyListMessage>
          )}

          {taskList.map((taskItem) => {
            const { id, task, completed } = taskItem
            const onRemove = () => handleRemoveTask(id)

            const onToggle = () => handleCompletedStatus(id, completed)

            return (
              <TaskItem
                completed={completed}
                key={id}
                id={id}
                onRemoveClick={onRemove}
                task={task}
                onCheckboxChange={onToggle}
              />
            )
          })}
        </TodoListContainer>
      </TodoContainer>
    </Container>
  )
}

export default App
