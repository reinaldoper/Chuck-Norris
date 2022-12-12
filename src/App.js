import React, {/*  useEffect, */ useState } from "react";
import taskApi from "./services/fetchApi";
import './App.css';

function App() {

  const [tasks, setTasks] = useState({});

  const getPost = async () => {
    try {
      const response = await taskApi();
      setTasks(response);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fatos humorísticos do Chuck Norris</h1>
        <button type="button" onClick={ getPost }>FATOS</button>
        <p>{ tasks.created_at }</p>
        <p>{ tasks.value }</p>
      </header>
    </div>
  );
}

export default App;
