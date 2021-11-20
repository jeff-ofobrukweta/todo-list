import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'

const SingleTodo = () => {
  const [params, setParams] = useState(useParams().todo)
  const { taskList } = useSelector(({ Task }) => Task)
  const navigate = useNavigate()
  useEffect(() => {
    if (
      !taskList.length ||
      !taskList.filter((todo) => Number(todo.id) === Number(params)).length
    ) {
      navigate('/')
    }
  }, [taskList])
  return <>single todo ....</>
}

export default SingleTodo
