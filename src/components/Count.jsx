/* eslint-disable react/destructuring-assignment */
import { Component } from 'react';

class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.todos.length,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.todos.length !== this.props.todos.length) {
      this.setState({
        count: this.props.todos.length,
      });
    }
  }

  render() {
    return <h5>Current Count of List Items: {this.state.count}</h5>;
  }
}

export default Count;
