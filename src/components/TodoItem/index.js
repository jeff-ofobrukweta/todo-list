import React from 'react'
import PropTypes from 'prop-types';
import {
  Container,
  Task,
  RemoveButton,
  Content,
} from './styles'

const TodoItem = (props) => {
  const { className, task, onRemoveClick } = props

  return (
    <Container className={className}>
      <RemoveButton onClick={onRemoveClick}>x</RemoveButton>


      <Content>
        <Task>{task}</Task>
      </Content>
    </Container>
  )
}


TodoItem.propTypes = {
  className: PropTypes.string,
  // task:PropTypes.string,
  onRemoveClick:PropTypes.func,
};


export default TodoItem
