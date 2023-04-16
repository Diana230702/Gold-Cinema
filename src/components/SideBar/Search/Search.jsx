import React, { useEffect, useState } from "react";
import "../Search.css";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { useSearchParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const { getProducts } = useProducts();
  useEffect(() => {
    setSearchParams({ q: search });
    getProducts();
  }, [search]);

  return (
    <form className="search_form">
      <input
        type="text"
        placeholder="Искать здесь..."
        onChange={(e) => setSearch(e.target.value)}
        className="search_inp"
      />
      <button className="search_btn">
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;
