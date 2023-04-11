import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  return (
    <div>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="≡"
          onChange={handleChange}
        >
          <MenuItem>Ten</MenuItem>
          <MenuItem>Twenty</MenuItem>
          <MenuItem>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default BurgerMenu;
