import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import MultipleSelectCheckmarks from '../multiSelectDropdown/MultiSelectDropdown';
import SearchBox from '../search/SearchBox';
import "./Header.scss";

const Header = (props) => {
    const [filters,setFilters]=React.useState({});

    const getSelected = (value) => {
        Object.keys(value).forEach((key)=>{
            const temp = filters;
            temp[key]=value[key];
            setFilters(temp);
        })
    }
    const applyFilter = () => {
        props.applyFilter(filters);
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className="header">
        <Toolbar>
          <SearchBox getSelected={getSelected}/>
          <MultipleSelectCheckmarks getSelected={getSelected} items={props?.board?.epic} label="Epic"/>
          <MultipleSelectCheckmarks getSelected={getSelected} items={props?.board?.types} label="Type"/>
          <MultipleSelectCheckmarks getSelected={getSelected} items={props?.users} label="Users"/>
          <Button variant="text" onClick={applyFilter}>Apply</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;