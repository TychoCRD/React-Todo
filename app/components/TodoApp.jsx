var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      todos: [
        {
        id: 1,
        text: 'Learn React'
      },
      {
        id: 2,
        text: 'Walk the dog'
      },
      {
        id: 3,
        text: 'Take out trash'
    },
      {
        id: 4,
        text: 'Water plants'
      }
    ]
    };
  },
  handleAddTodo: function(text){
    alert('new todo: ' + text  );
  },
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onNewTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
