import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import './style.css';
import NavBar from './NavBar';
import Home from './Home';
import Game from './Game';

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome!</h1>
//       <Link to="game">Game</Link>
//     </div>
//   );
// };

const App = () => {
  const [gameId, setGameId] = useState(1);
  return (
    <div>
      <NavBar />
      {/* <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-indigo-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="lg:flex flex-grow items-center">
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="game">
                  Game
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <Router>
        <Home path="/" />

        <Game
          path="game"
          key={gameId}
          startNewGame={() => setGameId(gameId + 1)}
        />
      </Router>
    </div>
  );
  // return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

export default App;
