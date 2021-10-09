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
        <Grid item xs>
             <Item>
                <BoardColumn 	title = { CONSTANTS.TITLE_TODO } category={props.category} moveCard={props.moveCard}
											tasks = { tasks.filter( task => {return task.status === CONSTANTS.TYPE_TODO	} )} />
            </Item>
        </Grid>
        <Grid item xs>
            <Item>
            <BoardColumn 	title = { CONSTANTS.TITLE_INPROGRESS } category={props.category} moveCard={props.moveCard}
											tasks = { tasks.filter( task => {return task.status === CONSTANTS.TYPE_INPROGRESS	} )} />
			 </Item>           
        </Grid>
        <Grid item xs>
             <Item>
             <BoardColumn  title = { CONSTANTS.TITLE_DEV_COMPLETE } category={props.category} moveCard={props.moveCard}
											tasks = { tasks.filter( task => {return task.status === CONSTANTS.TYPE_DEV_COMPLETE	} )} />
             </Item>
          </Grid>
          <Grid item xs>
             <Item>
             <BoardColumn  title = { CONSTANTS.TITLE_INQA } category={props.category} moveCard={props.moveCard}
											tasks = { tasks.filter( task => {return task.status === CONSTANTS.TYPE_INQA	} )} />
             </Item>
          </Grid>
          <Grid item xs>
             <Item>
             <BoardColumn  title = { CONSTANTS.TITLE_DONE } category={props.category} moveCard={props.moveCard}
											tasks = { tasks.filter( task => {return task.status === CONSTANTS.TYPE_DONE	} )} />
             </Item>
          </Grid>
      </Grid>
    </Box>
     </div>
  );
}

export default Board;
