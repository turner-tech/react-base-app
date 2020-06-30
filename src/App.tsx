import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import {GitHubCardApp} from "./app/GithubCard/GitHubCardApp";

function App() {
  return (
    <div className="App">
        <GitHubCardApp/>
    </div>
  );
}

export default App;
