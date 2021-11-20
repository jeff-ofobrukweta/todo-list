import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 5px;
  border: 1px solid rgba(255,255,255,0.1);
  padding: 1.6rem;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  transition: all .2s ease-in-out;

  &:hover{
    border: 1px solid rgba(255,255,255,0.2);
  }
`


export const Content = styled.div`
  flex: 1;
  margin-left: 1.6rem;
  margin-right: 2.4rem;
  overflow: hidden;
`


export const Task = styled.div``

export const RemoveButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-in-out;
  cursor: pointer;
  font-weight: bold;
  background: rgba(255,255,255,0.1);
  border-bottom-left-radius: 5px;

  &:hover{
    color: var(--accent-color);
  }
`
