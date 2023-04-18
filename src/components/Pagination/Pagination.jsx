import React from "react";
import "../Pagination/Pagination.css";
import { Button } from "@mui/material";
const PaginationList = ({ getPagesCount, currentPage, setCurrentPage }) => {
  //   console.log(getPagesCount);
  return (
    <div className="pagination_block">
      {currentPage == 1 ? (
        <Button
          variant="outlined"
          color="error"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled
        >
          prev
        </Button>
      ) : (
        <Button
          color="secondary"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          prev
        </Button>
      )}
      {getPagesCount().map((item) =>
        item == currentPage ? (
          <Button
            variant="contained"
            color="error"
            onClick={() => setCurrentPage(item)}
            key={item}
          >
            {item}
          </Button>
        ) : (
          <Button
            variant="outlined"
            onClick={() => setCurrentPage(item)}
            key={item}
          >
            {item}
          </Button>
        )
      )}
      {getPagesCount().map((item) =>
        item > currentPage ? (
          <Button
            variant="outlined"
            onClick={() => setCurrentPage(currentPage + 1)}
            key={item}
          >
            next
            {console.log(item)}
          </Button>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default PaginationList;
