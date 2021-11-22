import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding: 3.2rem 0;
`

export const TodoContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  max-width: 600px;
  min-width: 360px;
  margin: 13rem auto;
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

export const Input = styled.input`
  margin: 8px 0;
  width: 100%;
  padding: 1.6rem;
  background: var(--background-color);
  border: none;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  outline: none;

  &:focus {
    background: rgba(0, 0, 0, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.8);
  }
`

const ripple = keyframes`
0% {
  transform: scale(0, 0);
  opacity: 1;
}
20% {
  transform: scale(25, 25);
  opacity: 1;
}
100% {
  opacity: 0;
  transform: scale(40, 40);
}`

export const AddButton = styled.button`
  padding: 1.6rem 2.4rem;
  background: var(--accent-color);
  transition: background 0.2s ease-in-out;
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
  padding: 3.2rem;
  border-radius: 5px;
  width: 100%;
`

export const EmptyListMessage = styled.div`
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
`
