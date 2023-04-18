import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationList = ({ getPagesCount, currentPage, setCurrentPage }) => {
  //   console.log(getPagesCount);
  return (
    <div>
      {currentPage == 1 ? (
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled>
          prev
        </button>
      ) : (
        <button onClick={() => setCurrentPage(currentPage - 1)}>prev</button>
      )}
      {getPagesCount().map((item) =>
        item == currentPage ? (
          <button onClick={() => setCurrentPage(item)} key={item}>
            {item}
          </button>
        ) : (
          <button onClick={() => setCurrentPage(item)} key={item}>
            {item}
          </button>
        )
      )}
      {getPagesCount().map((item) =>
        item > currentPage ? (
          <button onClick={() => setCurrentPage(currentPage + 1)} key={item}>
            next
            {console.log(item)}
          </button>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default PaginationList;
