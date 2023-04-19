import React, { useState } from "react";
import "../Rating/Rating.css";
import { Rating, Typography } from "@mui/material";

function RatingComponent() {
  const [value, setValue] = useState();
  // console.log(value);
  return (
    <div>
      <Typography component="legend">Отзыв</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          // setValue(newValue);
          setValue(event.target.value);
        }}
      />
    </div>
  );
}
export default RatingComponent;
