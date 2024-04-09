import React, { useState } from "react";
// import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

export default function List(props) {
  const [style, setstyle] = useState({
    color: "gray",
  });
  const [click, setclick] = useState(1);
  const DltbtnClick = () => {
    props.dltInputvalue(props.idname);
  };
  const EditbtnClick = () => {
    props.EditInputvalue(props.idname);
  };
  const likebtnClick = () => {
    setclick(click + 1);
    if (click % 2 === 0) {
      console.log(click);
      setstyle({
        color: "gray",
      });
    } else {
      setstyle({
        color: "red",
      });
    }
  };
  return (
    <div>
      <Card sx={{ minWidth: 275, margin: "10px" }}>
        <CardContent className="">
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Typography variant="h5" component="div">
              {props.name}
            </Typography>
            <Fab color="primary" onClick={DltbtnClick} aria-label="delete">
              <DeleteIcon />
            </Fab>
            <Fab color="secondary" onClick={EditbtnClick} aria-label="edit">
              <EditIcon />
            </Fab>

            <Fab
              aria-label="like"
              onClick={likebtnClick}
              id={`like-${props.idname} `}
            >
              <FavoriteIcon onClick={likebtnClick} style={style} />
            </Fab>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
