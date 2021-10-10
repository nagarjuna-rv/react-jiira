import * as React from 'react';
import {Card as MuiCard, ClickAwayListener, Popover} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import * as CONSTANTS from '../../constants/BoardData';

import './Card.scss';

const Card = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <MuiCard sx={{ maxWidth: 345 , margin: '10px', borderLeft: props?.task?.type==='Bug'?'4px solid firebrick':(
    props?.task?.type==='Task'?'4px solid yellowgreen':'4px solid green')}} variant="outlined">
      <div
            className="cardTopMore"
            onClick={handleClick}
            aria-describedby={id}
          >
            <MoreHorizIcon />
            {
              <>
               
                 <Popover
                 id={id}
                 open={open}
                 anchorEl={anchorEl}
                 onClose={handleClose}
                 anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
               >
                 {props?.category?.filter(status => {return status !== props?.task?.status	})?.map((name) => (
                 <ClickAwayListener onClickAway={handleClose} key={name}>
                    <Typography sx={{padding: '0px 2px', border: '0.1rem solid grey', cursor: 'pointer'}} onClick={() => props.moveCard(props.task.id, name)}>{CONSTANTS.categoryDisplay[name]}</Typography>
                 </ClickAwayListener>
                 ))}
               </Popover>
                           
              </>
            }
          </div>
      <CardContent sx={{paddingTop:'2px'}}>
        <Typography gutterBottom variant="body4" align="left" component="div">
            {props?.task?.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography variant="body2" align="left" color="text.secondary">
            {props?.task?.type}
        </Typography>
        <Typography variant="body2" align="right" color="text.secondary" sx={{marginLeft: 'auto !important'}}>
            Assigned To: {props?.task?.assignedTo}
        </Typography>
      </CardActions>
    </MuiCard>
  );
}
export default Card;