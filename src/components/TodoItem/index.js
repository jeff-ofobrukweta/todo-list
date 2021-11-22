import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Task,
  RemoveButton,
  Content,
  StyledLink,
  CompleteTask,
  IncompleteTask,
  FlexContainerWrapper,
  CompleteTaskText,
} from './styles'
import { Link } from 'react-router-dom'

const TodoItem = (props) => {
  const { className, onCheckboxChange, task, id, onRemoveClick, completed } =
    props

  return (
    <Container className={className}>
      <RemoveButton onClick={onRemoveClick}>x</RemoveButton>
      {/* <input
        onChange={onCheckboxChange}
        checked={completed ? true : false}
        type="checkbox"
      /> */}

      <Content>
        {completed ? (
          <CompleteTaskText>{task}</CompleteTaskText>
        ) : (
          <Task>{task}</Task>
        )}

        <FlexContainerWrapper>
          <StyledLink to={`/${id}`}>Edit</StyledLink>
          {completed ? (
            <CompleteTask onClick={onCheckboxChange}>
              <i class="fas fa-check"></i>
            </CompleteTask>
          ) : (
            <IncompleteTask onClick={onCheckboxChange}>
              <i class="fas fa-grip-lines"></i>
            </IncompleteTask>
          )}
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
