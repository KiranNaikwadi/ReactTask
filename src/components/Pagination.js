// src/components/Pagination.js
import React from 'react';

const Pagination = ({ currentPage, setPage, totalPages }) => {
  const nextPage = () => {
    if (currentPage < totalPages) {
      setPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
    </div>
  );
};

export default Pagination;
