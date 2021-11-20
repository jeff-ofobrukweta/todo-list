import React from 'react'
import PropTypes from 'prop-types'
import { Container, Task, RemoveButton, Content, StyledLink } from './styles'
import { Link } from 'react-router-dom'

const TodoItem = (props) => {
  const { className, task, id, onRemoveClick } = props

  return (
    <Container className={className}>
      <RemoveButton onClick={onRemoveClick}>x</RemoveButton>
      <Content>
        <Task>{task}</Task>
        <StyledLink to={`/${id}`}>Edit</StyledLink>
      </Content>
    </Container>
  )
}

TodoItem.propTypes = {
  className: PropTypes.string,
  // task:PropTypes.string,
  onRemoveClick: PropTypes.func,
}

export default TodoItem
