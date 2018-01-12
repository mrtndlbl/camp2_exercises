import React from 'react';
import renderer from 'react-test-renderer';
import App from "./App";
import { configure, shallow, mount  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

beforeAll(() => {
  configure({ adapter: new Adapter() });
})

test('The toDoList appears at server starting', () => {
  const component = renderer.create(<App />);
  let table = component.toJSON();
  expect(table).toMatchSnapshot();
});

test('We can save a task', () => {
  const component = mount(<App />);
  const newTodo = "First todo";
  component.setState({newTask: newTodo});
  component.find("form").simulate("submit", { preventDefault(){}})
  expect(component.state().tasks).toEqual([{"completed": false, "id": 1, "label": "First todo"}]);
  expect(component.state().tasks.length).toEqual(1);
});

test('We can delete a task', () => {
  const component = mount(<App />);
  const newTodo = "First todo";
  component.setState({newTask: newTodo});
  component.find("form").simulate("submit", {preventDefault(){}});
  component.find(".todos input").simulate("change", {preventDefault(){}});
  component.find(".deleteButton").simulate("click", {preventDefault(){}});
  expect(component.state().tasks.length).toEqual(0);
});
