import { TextField } from '@mui/material';
import * as React from 'react';


const SearchBox = (props) => {
  const[searchQ, setSearchQ]=React.useState("");
  React.useEffect(()=>{
    if(props.clearFilters)setSearchQ("");
  },[props.clearFilters])
    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setSearchQ(value);
        props.getSelected({"searchQuery":value});
      };
  return (
            <TextField
                  required
                  fullWidth
                  hiddenLabel
                  name="search"
                  label="Search for title"
                  id="search"
                  onChange={handleChange}
                  variant="filled"
                  value={searchQ}
                />
  );
}
export default SearchBox