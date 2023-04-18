import React from "react";
import "../Pagination/Pagination.css";
const PaginationList = ({ getPagesCount, currentPage, setCurrentPage }) => {
  //   console.log(getPagesCount);
  return (
    <div>
      {currentPage == 1 ? (
        <button
          className="btn_pagination"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled
        >
          prev
        </button>
      ) : (
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className="btn_pagination"
        >
          prev
        </button>
      )}
      {getPagesCount().map((item) =>
        item == currentPage ? (
          <button
            onClick={() => setCurrentPage(item)}
            key={item}
            className="btn_pagination"
          >
            {item}
          </button>
        ) : (
          <button
            onClick={() => setCurrentPage(item)}
            key={item}
            className="btn_pagination"
          >
            {item}
          </button>
        )
      )}
      {getPagesCount().map((item) =>
        item > currentPage ? (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            key={item}
            className="btn_pagination"
          >
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
