
import Board from './components/board/Board';
import Header from './components/header/Header';
import * as CONSTANTS from './constants/BoardData';

import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [filterObj, setFilterObj] = useState({});
    useEffect(() => {
      setItems(CONSTANTS.BoardData[0].tasks);
  }, []);
  const applyFilter=(value)=>{
    console.log('--->',value);
    setFilterObj(value);
  }
  const moveCard = (taskId,status) => {
    console.log(taskId,status);
    var index = items.findIndex(x=> x.id === taskId);
    if (index !== -1){
      setItems([
           ...items.slice(0,index),
           Object.assign({}, items[index], {status: status}),
           ...items.slice(index+1)
        ]
      );
    }
  }
  const addNewCard = (data) => {
    console.log('new card',data);
    const newItem = {
      id: Math.floor(Math.random() * 1000)+'',
			priority: CONSTANTS.PRIORITY_LOW,
			title: data.title,
			epic: data.epic,
			assignedTo: data.assignTo,
			status: CONSTANTS.TYPE_TODO,
			type: data.type
    }
    setItems([...items,newItem]);
  }
  return (
    <div className="App">
      <Header applyFilter={applyFilter} board={CONSTANTS.BoardData[0]} users={CONSTANTS.users} addNewCard={addNewCard}/>
      <Board tasks={items} category={CONSTANTS.category} moveCard={moveCard}/>
    </div>
  );
}

export default App;

