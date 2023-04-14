import React from "react";
import "../SideBar.css";
const Search = (search_start_form) => {
  return (
    <div
      className={search_start_form ? "search_input_true" : "search_input_false"}
    >
      <input type="text" placeholder="введите название фильма" />
    </div>
  );
};

export default Search;
