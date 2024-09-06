import React from 'react';

const Pagination = ({ onPageChange, currentPage, blogsData, pageSize }) => {
  const totalPage = Math.ceil(blogsData.length / pageSize);
  console.log('totalPage', totalPage);

  const renderPaginationLink = () => {
    return Array.from({ length: totalPage }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          className={pageNumber === currentPage ? 'activePagination' : ''}
          key={pageNumber}
        >
          <a href="#" onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </a>
        </li>
      )
    );
  };

  return (
    <ul className="pagination my-8 flex-wrap gap-4">
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
      </li>
      <div className="flex gap-1">{renderPaginationLink()}</div>
      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPage}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
