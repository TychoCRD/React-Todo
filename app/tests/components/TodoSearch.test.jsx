var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

// var TodoSearch = require('TodoSearch');
import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', ()=>{
  it('should exist', ()=>{
    expect(TodoSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT on input change', ()=>{
    var searchText = 'dog';
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: searchText
    };
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED on change of checkbox', ()=>{
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);
  });

});

// it('should call onSearch with entered input text', ()=>{
//   var searchText = 'dog';
//   var spy = expect.createSpy();
//   var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
//
//   todoSearch.refs.searchText.value = searchText;
//   TestUtils.Simulate.change(todoSearch.refs.searchText);
//
//   expect(spy).toHaveBeenCalledWith(false, 'dog');
// });
//
// it('should call onSearch with proper checked value', ()=>{
//   var spy = expect.createSpy();
//   var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
//
//   todoSearch.refs.showCompleted.checked = true;
//   TestUtils.Simulate.change(todoSearch.refs.showCompleted);
//
//   expect(spy).toHaveBeenCalledWith(true, '');
//
// });
