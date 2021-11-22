import styled, { keyframes } from 'styled-components'
import TodoItem from 'components/TodoItem'
import ErrorBox from 'components/ErrorBox'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding: 3.2rem 0;
`
export const DivContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export const TodoContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  max-width: 500px;
  padding: 0rem 1rem;
  width: 100%;
`

export const SingleTodoContainer = styled(TodoContainer)`
  transform: translateY(87%);
`

export const Title = styled.h1`
  color: var(--text-color);
  margin-bottom: 3.2rem;
  text-align: center;
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`

const rotate = keyframes`
  0% {
    border-bottom-left-radius: 0px;
  }
  50% {
    border-bottom-left-radius: 40px;
  }
  100% {
    border-bottom-left-radius: 0px;
  }
`

export const Input = styled.input`
  margin: 8px 0;
  width: 100%;
  padding: 1.6rem;
  background: var(--background-color);
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
  ${'' /* border-radius: 5px; */}
  ${'' /* transition: all 0.2s ease-in-out; */}
  ${'' /* outline: none; */}
${
    '' /* 
  @keyframes bump {
    0% {
      border-bottom-left-radius: 0px;
    }
    50% {
      border-bottom-left-radius: 40px;
    }
    100% {
      border-bottom-left-radius: 0px;
    }
  } */
  }

  

  &:focus {
    ${'' /* background: rgba(0, 0, 0, 0.1); */}
    outline : none;
    ${'' /* border: 2px solid rgba(255, 255, 255, 0.8); */}
    animation: ${rotate} .2s;
  }
  ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.8);
    -webkit-transition: ease-in 0.3s;
    transition: ease-in 0.3s;
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
  }
  :focus::-webkit-input-placeholder {
    opacity: 0;
    transform: translate(70%);
    -webkit-transition: all 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
  }
`

export const AddButton = styled.button`
  padding: 1.6rem 2.4rem;
  background: var(--accent-color);
  transition: background 0.3s ease-in-out;
  outline: none;
  border: none;
  border-radius: 5px;
  margin: 0.8rem 0 3.2rem 0;
  width: 100%;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.8rem;

  background-position: center;
  transition: background 0.8s;

  &:hover {
    background: #ed7c83 radial-gradient(circle, transparent 1%, #ed7c83 1%)
      center/15000%;
  }

  &:active {
    background-color: #e3babc !important;
    background-size: 100% !important;
    transition: background 0s !important;
  }
`

export const TodoListContainer = styled.div`
  background: var(--list-container-background);
  padding: 1.2rem;
  border-radius: 5px;
  width: 100%;
`

export const EmptyListMessage = styled.div`
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
`

export const TaskItem = styled(TodoItem)`
  margin-bottom: 8px;
`

export const Error = styled(ErrorBox)`
  margin-bottom: 1.6rem;
`
