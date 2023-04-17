import React from "react";

const PaginationList = ({ getPagesCount, setCurrentPage, currentPage }) => {
  const pages = [];
  for (let i = 1; i <= getPagesCount(); i++) {
    pages.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 && "disabled"}`}>
          <button
            className="page-link"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &laquo;
          </button>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${page === currentPage && "active"}`}
          >
            <button
              className="page-link"
              onClick={() => setCurrentPage(page)}
              disabled={page === currentPage}
            >
              {page}
            </button>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === getPagesCount() && "disabled"
          }`}
        >
          <button
            className="page-link"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === getPagesCount()}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationList;
