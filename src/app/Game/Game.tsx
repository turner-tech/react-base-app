import React, {useState} from 'react';
import {StarMatch} from "../StarMatch/StarMatch";

export const Game = () => {
    const [gameId, setGameId] = useState(1);
    return (
        <div> React Games
            <StarMatch key={gameId} startNewGame={() => setGameId(gameId + 1)}/>
        </div>
    )
}
