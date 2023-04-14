import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import Search from "./Search/Search";
const SideBar = () => {
  const [search_start_form, setSearch_start_form] = useState(false);

  return (
    <div>
      <IconButton>
        <SearchIcon onclick={() => setSearch_start_form(true)} />
      </IconButton>
      <Search search_start_form={search_start_form} />
    </div>
  );
};

export default SideBar;
