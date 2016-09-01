var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');


var configureStore = require('configureStore');
var TodoApp = require('TodoApp');
import TodoList from 'TodoList';



describe('TodoApp', ()=>{
  it('should exist', ()=>{
    expect(TodoApp).toExist();
  });

  it('should render TodoList', ()=>{
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });

});
  // it('should add todo to the todos on handleAddTodo', ()=>{
  //   var todoText = 'Test app';
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
  //
  //   todoApp.setState({todos:[]});
  //   todoApp.handleAddTodo(todoText);
  //
  //   expect(todoApp.state.todos[0].text).toBe(todoText);
  //   expect(todoApp.state.todos[0].createdAt).toBeA('number');
  // });

  // it('should toggle completed value when handleToggle called', ()=>{
  //   var todoData = {
  //     id: 11,
  //     text: 'Test features',
  //     completed: false,
  //     createdAt: 0,
  //     completedAt: undefined
  //   };
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
  //   todoApp.setState({todos: [todoData]});
  //
  //   expect(todoApp.state.todos[0].completed).toBe(false);
  //   todoApp.handleToggle(11);
  //   expect(todoApp.state.todos[0].completed).toBe(true);
  //   expect(todoApp.state.todos[0].completedAt).toBeA('number');
  //
  // });
  //
  // it('should removed completedAt when toggled from true to false', ()=>{
  //   var todoData = {
  //     id: 11,
  //     text: 'Test features',
  //     completed: true,
  //     createdAt: 0,
  //     completedAt: 1
  //   };
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
  //   todoApp.setState({todos: [todoData]});
  //
  //   expect(todoApp.state.todos[0].completed).toBe(true);
  //   todoApp.handleToggle(11);
  //   expect(todoApp.state.todos[0].completed).toBe(false);
  //   expect(todoApp.state.todos[0].completedAt).toBe(undefined);
  // });
