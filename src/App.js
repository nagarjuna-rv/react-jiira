import Board from './components/board/Board';
import Header from './components/header/Header';
import * as CONSTANTS from './constants/BoardData';

import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
    useEffect(() => {
      setItems(CONSTANTS.BoardData[0].tasks);
  }, []);
  const applyFilter=(value)=>{
    console.log('--->',value);
  }
  return (
    <div className="App">
      <Header applyFilter={applyFilter} board={CONSTANTS.BoardData[0]} users={CONSTANTS.users}/>
      <Board />
    </div>
  );
}

export default App;
