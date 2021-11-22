import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, DivContainer } from '../App/styles'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import {
  AddButton,
  Input,
  InputContainer,
  SingleTodoContainer,
} from 'pages/App/styles'
import { updateTaskById } from 'store/ducks/task/actions'
import {
  SingleCompleteTask,
  SingleInCompleteTask,
} from '../../components/TodoItem/styles'

const SingleTodo = () => {
  const [params, setParams] = useState(useParams().todo)
  const [task, setTask] = useState('')
  const [todo, setTodo] = useState({})
  const { taskList } = useSelector(({ Task }) => Task)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSave = (e) => {
    e.preventDefault()
    setTodo({ ...todo, task })
    if (!task.trim()) return
    dispatch(
      updateTaskById({
        payload: { ...todo, task },
      }),
    )
    navigate('/')
  }

  const toggleCompleted = () => {
    setTodo({ ...todo, completed: !todo.completed })
  }

  useEffect(() => {
    if (
      !taskList.length ||
      !taskList.filter((todo) => Number(todo.id) === Number(params)).length
    ) {
      navigate('/')
    }
  }, [taskList])

  useEffect(() => {
    const singleTodo = taskList.filter(
      (todo) => Number(todo.id) === Number(params),
    )
    setTodo(singleTodo[0])
    setTask(singleTodo[0]?.task)
  }, [params])

  return (
    <>
      <Container>
        <SingleTodoContainer onSubmit={handleSave}>
          <InputContainer>
            <Input onChange={(e) => setTask(e.target.value)} value={task} />
          </InputContainer>
          <DivContainer>
            {todo.completed ? (
              <SingleCompleteTask onClick={toggleCompleted} type="button">
                <i className="fas fa-check"></i>
              </SingleCompleteTask>
            ) : (
              <SingleInCompleteTask onClick={toggleCompleted} type="button">
                <i className="fas fa-grip-lines"></i>
              </SingleInCompleteTask>
            )}
            <DivContainer>
              {todo.completed ? 'Completed' : 'Not Completed'}{' '}
            </DivContainer>
          </DivContainer>
          <AddButton
            disabled={!task.trim().length ? 'disabled' : ''}
            type="submit"
          >
            Save Changes
          </AddButton>
        </SingleTodoContainer>
      </Container>
    </>
  )
}

export default SingleTodo
