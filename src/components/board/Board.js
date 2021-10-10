import React from "react";
import * as CONSTANTS from '../../constants/BoardData';
import BoardColumn from '../boardColumn/BoardColumn';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Board.scss'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '100%'
}));

const Board = (props) => {
  const tasks = props.tasks;
  return (
    <div className="board">
      <Box sx={{ flexGrow: 1 }}>
      <Grid direction="row" container rowSpacing={1} >
        {
          props?.category?.map((category)=>(
            <Grid item xs key={category}>
              <Item>
                  <BoardColumn 	title = { CONSTANTS.categoryDisplay[category] } category={props.category} moveCard={props.moveCard}
                        tasks = { tasks.filter( task => {return task.status === category	} )} />
              </Item>
            </Grid>
          ))
        }
      </Grid>
    </Box>
     </div>
  );
}

export default Board;
