import { useState } from 'react';
import './App.css';

import Greeting from './Greeting.jsx';
import Food from './Food.jsx';
import Music from './Music.jsx';
import TodoList from './TodoList.jsx';
import PackingList from './PackingList.jsx';
import DrinkList from './DrinkList.jsx';
import RecipeList from './RecipeList.jsx';
import Gallery from './Gallery.jsx';
import Gallery2 from './Gallery2.jsx'
import Form from './Form.jsx';
import FeedbackForm from './FeedbackForm.jsx';
import TrafficLight from './TrafficLight.jsx'
import SyncedInputs from './SyncedInput.jsx';
import FilterableList from './FilterableList.jsx';

import ChatRoom from './components/useEffect/ChatRoom.jsx';

function App() {
  const [count, setCount] = useState(0);
  const [roomId, setRoomId] = useState('general');

  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
      <FilterableList />
      <SyncedInputs />
      <TrafficLight />
      <FeedbackForm />
      <Form />
      <Gallery2 />
      <Gallery />
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
      <Greeting />
      <Food />
      <Music />
      <TodoList />
      <PackingList />
      <DrinkList />
      <RecipeList />
    </>
  );
}

export default App;
