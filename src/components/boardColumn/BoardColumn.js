import { Typography } from "@mui/material";
import React from "react";
import Card from '../card/Card';
 import "./BoardColumn.scss";

const BoardColumn = (props) => {
 
  return (<>
      <Typography gutterBottom variant="h5" component="div">{props?.title}</Typography>
      <div className="board_cards custom-scroll">
        {props.tasks?.map((item) => (
            <Card key={item.id} task={item} category={props.category} moveCard={props.moveCard}/>
        ))}
      </div>
      </>
  );
}
export default BoardColumn;
