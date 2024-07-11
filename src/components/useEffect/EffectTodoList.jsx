/**
 * Challenge 1 of 4: Transform data without Effects
 * The TodoList below displays a list of todos. When the “Show only active
 *  todos” checkbox is ticked, completed todos are not displayed in the list.
 *  Regardless of which todos are visible, the footer displays the count of
 *  todos that are not yet completed.
 * 
 * Simplify this component by removing all the unnecessary state and Effects.
 * 
 * --> There are only two essential pieces of state in this example: the list
 *     of todos and the showActive state variable which represents whether the
 *     checkbox is ticked. All of the other state variables are redundant and
 *     can be calculated during rendering instead. This includes the footer
 *     which you can move directly into the surrounding JSX.
 * 
 * 
 * Challenge 2 of 4: Cache a calculation without Effects
 * In this example, filtering the todos was extracted into a separate function
 *  called getVisibleTodos(). This function contains a console.log() call inside
 *  of it which helps you notice when it’s being called. Toggle “Show only active
 *  todos” and notice that it causes getVisibleTodos() to re-run. This is expected
 *  because visible todos change when you toggle which ones to display.
 * 
 * Your task is to remove the Effect that recomputes the visibleTodos list in the
 *  TodoList component. However, you need to make sure that getVisibleTodos()
 *  does not re-run (and so does not print any logs) when you type into the input.
 * 
 * --> Remove the state variable and the Effect, and instead add a useMemo call
 *     to cache the result of calling getVisibleTodos():
 */

import { useState, useMemo } from 'react';
import { initialTodos, createTodo, getVisibleTodos } from './todos.js';

export default function EffectTodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  const activeTodos = todos.filter(todo => !todo.completed);
  const [text, setText] = useState('');
  const visibleTodos = useMemo(
    () => getVisibleTodos(todos, showActive),
    [todos, showActive]
  );

  function handleAddClick() {
    setText('');
    setTodos([...todos, createTodo(text)]);
  }

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
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAddClick}>
        Add
      </button>
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
