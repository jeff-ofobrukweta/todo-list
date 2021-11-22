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

const TodoItem = (props) => {
  const { className, onCheckboxChange, task, id, onRemoveClick, completed } =
    props

  return (
    <Container className={className}>
      <RemoveButton onClick={onRemoveClick}>x</RemoveButton>
      <Content>
        {completed ? (
          <CompleteTaskText>{task}</CompleteTaskText>
        ) : (
          <Task title={task}>{task}</Task>
        )}

        <FlexContainerWrapper>
          <StyledLink to={`/${id}`}>Edit</StyledLink>
          {completed ? (
            <CompleteTask onClick={onCheckboxChange}>
              <i className="fas fa-check"></i>
            </CompleteTask>
          ) : (
            <IncompleteTask onClick={onCheckboxChange}>
              <i className="fas fa-grip-lines"></i>
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
