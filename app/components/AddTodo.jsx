var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.text.value;

    if(todoText.length > 0){
      this.refs.text.value = '';
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.text.focus();
    }
  },
  render: function(){
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="text" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
