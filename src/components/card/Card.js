import * as React from 'react';
import {Card as MuiCard} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Card = (props) => {
  return (
    <MuiCard sx={{ maxWidth: 345 , margin: '10px'}} variant="outlined">
      <CardContent>
        <Typography gutterBottom variant="body4" align="left" component="div">
            {props?.task?.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography variant="body2" align="left" color="text.secondary">
            {props?.task?.priority}
        </Typography>
        <Typography variant="body2" align="right" color="text.secondary" sx={{marginLeft: 'auto !important'}}>
            Assigned To: {props?.task?.assignedTo}
        </Typography>
      </CardActions>
    </MuiCard>
  );
}
export default Card;