var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

// var AddTodo = require('AddTodo');
var {AddTodo} = require('AddTodo');

describe('AddTodo', ()=>{
  it('should exist', ()=>{
    expect(AddTodo).toExist();
  });

  it('should dispatch ADD_TODO when valid todo text', ()=>{
    var todoText = 'Check mail';
    var action = {
      type: 'ADD_TODO',
      text: todoText
    };
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.text.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO when invalid todo text', ()=>{
    var todoText = '';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.text.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});

// it('should call on onNewTodo when valid text entered', ()=>{
//   var spy = expect.createSpy();
//   var addTodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy}/>);
//   var $el = $(ReactDOM.findDOMNode(addTodo));
//
//   addTodo.refs.text.value = 'Run a test';
//   TestUtils.Simulate.submit($el.find('form')[0]);
//
//   expect(spy).toHaveBeenCalledWith('Run a test');
// });

// it('should not call on onNewTodo when invalid text entered', ()=>{
//   var spy = expect.createSpy();
//   var addTodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy}/>);
//   var $el = $(ReactDOM.findDOMNode(addTodo));
//
//   addTodo.refs.text.value = '';
//   TestUtils.Simulate.submit($el.find('form')[0]);
//
//   expect(spy).toNotHaveBeenCalled();
// });
