/* eslint-disable react/destructuring-assignment */
import { Component } from 'react';
import Count from './components/Count';

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example'],
      inputVal: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: '',
    }));
  }

  render() {
    return (
      <section>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='task-entry'>Enter a task: </label>
          <input
            type='text'
            name='task-entry'
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type='submit'>Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <Count todos={this.state.todos} />
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo}>
              {todo}
              <button onClick={() => console.log('edit clicked')}>
                Edit
              </button>
              <button
                onClick={() =>
                  this.setState((state) => ({
                    ...state,
                    todos: state.todos.filter((item) => item != todo),
                  }))
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
