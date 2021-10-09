import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import * as React from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border:'1px solid',
  padding: '7.5px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
    },
  },
}));

const SearchBox = (props) => {
    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        props.getSelected({"searchQuery":value});
      };
  return (
          <Search>
            <SearchIconWrapper>
              
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for title…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChange}
            />
          </Search>
  );
}
export default SearchBox