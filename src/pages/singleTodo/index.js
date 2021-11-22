import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '../App/styles'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import {
  AddButton,
  Input,
  InputContainer,
  TodoContainer,
} from 'pages/App/styles'
import { updateTaskById } from 'store/ducks/task/actions'

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
        <TodoContainer onSubmit={handleSave}>
          <InputContainer>
            <Input onChange={(e) => setTask(e.target.value)} value={task} />
          </InputContainer>
          <AddButton type="submit">Save Changes</AddButton>
        </TodoContainer>
      </Container>
    </>
  )
}

export default SingleTodo
