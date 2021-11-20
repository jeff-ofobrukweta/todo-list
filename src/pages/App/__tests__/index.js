import React from 'react';
import { shallow } from 'enzyme';


const title = 'Test Title';
let wrapped = shallow(<h1>{title}</h1>);


describe('Title', () => {
  it('should render the Title Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
});