import React from 'react';
import './App.scss';
import {GitHubCardApp} from "./app/GithubCard/GitHubCardApp";
import {Game} from "./app/Game/Game";

export function App() {
  return (
    <div className="App" id="base-app"> Collection of Simple React Apps
        <GitHubCardApp/>
        <Game/>
    </div>
  );
}
