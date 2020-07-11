import React from "react";

const Pagination = ({ totalLists, listPerPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalLists / listPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="paginations">
      <ul>
        {pageNumbers.map((page) => (
          <li key={page}>
            <a onClick={() => paginate(page)} href="/#">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// <div></div>;

export default Pagination;
