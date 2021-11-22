import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import {
    Container,
    InputContainer,
    Input,
    TodoContainer,
    Title,
    AddButton,
} from './styles'

const SingleTodo = () => {
    const taskRef = useRef(null)
    const [task, setTask] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!task.trim()) return



        taskRef.current.focus()
    }
    const [params, setParams] = useState(useParams().todo)
    const [todo, setTodo] = useState({})
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

    useEffect(() => {
        const singleTodo = taskList.filter(
            (todo) => Number(todo.id) === Number(params),
        )
        setTodo(singleTodo[0])
    }, [params])

    return (
        <>
            {
                (false) &&
                <Container className="edit-wrapper-main-container">
                    <TodoContainer onSubmit={handleSubmit}>
                        <Title>{todo.task}</Title>

                        <InputContainer>
                            <Input
                                ref={taskRef}
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                                placeholder="Edit Task here"
                            />
                        </InputContainer>

                        <AddButton type="submit">Edit Task</AddButton>

                    </TodoContainer>
                </Container>
            }

            {
                (true) &&
                <Container className="wrapper-main-container">
                    <Title>{todo.task}</Title>
                </Container>
            }


        </>
    )
}

export default SingleTodo
