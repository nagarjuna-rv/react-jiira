
import Board from './components/board/Board';
import Header from './components/header/Header';
import * as CONSTANTS from './constants/BoardData';

import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [items, setItems] = useState([]);

  const [filteredItems, setFilteredItems] = useState([]);
  const [filterObj, setFilterObj] = useState({});
  useEffect(() => {
      setItems(CONSTANTS.BoardData[0].tasks);
      setFilteredItems(CONSTANTS.BoardData[0].tasks);
  }, []);
  
  const applyFilter=(value)=>{
    let newItems = items?.filter((item)=>{return !value['Type'] || value['Type'].length===0?true : value['Type']?.includes(item.type)})
     ?.filter((item)=>{return !value['Epic'] || value['Epic'].length===0?true : value['Epic'] && value['Epic']?.includes(item.epic)})
     ?.filter((item)=>{return !value['Users'] || value['Users'].length===0?true : value['Users'] &&  value['Users']?.includes(item.assignedTo)})
    ?.filter((item)=>{return !value['searchQuery'] || value['searchQuery'].length===0?true:item?.title?.toLowerCase().indexOf(value['searchQuery']?.toString().toLowerCase()) > -1});
    setFilteredItems(newItems);
  }

  const clearFilter=()=>{
    setFilterObj({});
    setFilteredItems(items);
  }
  const moveCard = (taskId,status) => {
    console.log(taskId,status);
    var index = items.findIndex(x=> x.id === taskId);
    if (index !== -1){
      setFilteredItems([
        ...items.slice(0,index),
        Object.assign({}, items[index], {status: status}),
        ...items.slice(index+1)
     ]
   );
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
    setFilteredItems([...filteredItems,newItem]);
  }
  return (
    <div className="App">
      <Header clearFilter={clearFilter} applyFilter={applyFilter} board={CONSTANTS.BoardData[0]} users={CONSTANTS.users} addNewCard={addNewCard}/>
      <Board tasks={filteredItems} category={CONSTANTS.category} moveCard={moveCard}/>
    </div>
  );
}

export default App;

