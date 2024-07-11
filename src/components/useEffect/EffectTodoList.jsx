/**
 * Challenge 1 of 4: Transform data without Effects
 * The TodoList below displays a list of todos. When the “Show only active
 * todos” checkbox is ticked, completed todos are not displayed in the list.
 * Regardless of which todos are visible, the footer displays the count of
 * todos that are not yet completed.
 * 
 * Simplify this component by removing all the unnecessary state and Effects.
 * 
 * --> There are only two essential pieces of state in this example: the list
 *     of todos and the showActive state variable which represents whether the
 *     checkbox is ticked. All of the other state variables are redundant and
 *     can be calculated during rendering instead. This includes the footer
 *     which you can move directly into the surrounding JSX.
 */

import { useState } from 'react';
import { initialTodos, createTodo } from './todos.js';

export default function EffectTodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  const activeTodos = todos.filter(todo => !todo.completed);
  const visibleTodos = showActive ? activeTodos : todos;

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={e => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <NewTodo onAdd={newTodo => setTodos([...todos, newTodo])} />
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
      <footer>
        {activeTodos.length} todos left
      </footer>
    </>
  );
}

function NewTodo({ onAdd }) {
  const [text, setText] = useState('');

  function handleAddClick() {
    setText('');
    onAdd(createTodo(text));
  }

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAddClick}>
        Add
      </button>
    </>
  );
}
