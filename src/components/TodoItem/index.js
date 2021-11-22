import React from 'react'
import PropTypes from 'prop-types'
import { Container, Task, RemoveButton, Content, StyledLink, DeleteTask, FlexContainerWrapper } from './styles'

const TodoItem = (props) => {
  const { className, onCheckboxChange, task, id, onRemoveClick, completed } =
    props

  return (
    <Container className={className}>
      <RemoveButton onClick={onRemoveClick}>x</RemoveButton>
      <input
        onChange={onCheckboxChange}
        checked={completed ? true : false}
        type="checkbox"
      />

      <Content>
        <Task>{task}</Task>

        <FlexContainerWrapper>
          <StyledLink to={`/${id}`}>Edit</StyledLink>
          <DeleteTask>
            completed
          </DeleteTask>
        </FlexContainerWrapper>

      </Content>
    </Container>
  )
}

TodoItem.propTypes = {
  className: PropTypes.string,
  task: PropTypes.string,
  completed: PropTypes.bool,
  onCheckboxChange: PropTypes.func,
  handleChange: PropTypes.func,
}

export default TodoItem
