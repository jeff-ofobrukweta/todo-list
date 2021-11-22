import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from 'components/TodoItem';
import { TodoListContainer } from 'pages/singleTodo/styles';




describe('Title', () => {
  
  it('should snapshot the TodoItem Component correctly', () => {   
    let wrapped = shallow(<TodoItem/>);
    expect(wrapped).toMatchSnapshot();
  });

  it('should snapshot the TodoListContainer Component correctly', () => {   
    let wrapped = shallow(<TodoListContainer/>);
    expect(wrapped).toMatchSnapshot();
  });
});