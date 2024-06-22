import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
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


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Hello World</h1>
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
