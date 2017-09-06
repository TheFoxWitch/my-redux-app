import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//will be required instead of react.createClass
var createReactClass = require('create-react-class');

var CountMe = createReactClass({
  increment: function() {
  	this.refs.counter.increment();
  },
  decrement: function() {
    this.refs.counter.decrement();
  },
  render: function() {
    return (
    	<div id="counter">
      	<Counter ref="counter" />
      	<Logic increment={this.increment} />
        <Logic2 decrement={this.decrement} />
      </div>
    );
  }
});

var Logic = createReactClass({
  render: function() {
    return <button onClick={this.props.increment}>increment</button>;
  }
});

var Logic2 = createReactClass({
  render: function() {
    return <button onClick={this.props.decrement}>decrement</button>;
  }
});

var Counter = createReactClass({
	getInitialState: function() {
  	return {
    	counter: 0
    };
  },
	increment: function() {
  	this.setState({
    	counter: this.state.counter + 1
    });
  },
  decrement: function() {
  	this.setState({
    	counter: this.state.counter - 1
    });
  },
  render: function() {
    return <div>{this.state.counter}</div>;
  }
});

ReactDOM.render(
  <CountMe />, document.getElementById('root'));
registerServiceWorker();
