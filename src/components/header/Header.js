import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import CreateTaskModal from '../modal/CreateTaskModal';
import MultipleSelectCheckmarks from '../multiSelectDropdown/MultiSelectDropdown';
import * as CONSTANTS from '../../constants/BoardData';
import SearchBox from '../search/SearchBox';
import "./Header.scss";

const Header = (props) => {
    const [filters,setFilters]=React.useState({});
    const [clearFilters,setClearFilters]=React.useState(false);

    const getSelected = (value) => {
        Object.keys(value).forEach((key)=>{
            const temp = filters;
            temp[key]=value[key];
            setFilters(temp);
        });
        setClearFilters(false);
        applyFilter();
    }
    const applyFilter = () => {
        props.applyFilter(filters);
    }
    const clearFilter = () => {
      setClearFilters(true)
      props.clearFilter();
  }
    const addNewCard = (data) => {
      props.addNewCard(data)
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className="header">
        <Toolbar>
          <SearchBox clearFilters={clearFilters} getSelected={getSelected}/>
          <MultipleSelectCheckmarks clearFilters={clearFilters} getSelected={getSelected} items={props?.board?.epic} label="Epic"/>
          <MultipleSelectCheckmarks clearFilters={clearFilters} getSelected={getSelected} items={props?.board?.types} label="Type"/>
          <MultipleSelectCheckmarks clearFilters={clearFilters} getSelected={getSelected} items={props?.users} label="Users"/>
          <Button variant="text" onClick={clearFilter}>Clear All</Button>
          <CreateTaskModal variant="contained" addNewCard={addNewCard} epic={CONSTANTS.epic} users={CONSTANTS.users} type={CONSTANTS.types}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;