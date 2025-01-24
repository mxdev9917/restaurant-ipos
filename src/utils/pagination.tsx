import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { CgPushChevronLeft, CgPushChevronRight } from 'react-icons/cg';

type PageRangeProps = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

const PageRange: React.FC<PageRangeProps> = ({ currentPage, totalItems, itemsPerPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const pageRange = () => {
    const range = [];
    const numPages = totalPages > 5 ? 5 : totalPages;

    if (currentPage <= 3) {
      for (let i = 1; i <= numPages; i++) range.push(i);
    } else if (currentPage >= totalPages - 2) {
      for (let i = totalPages - numPages + 1; i <= totalPages; i++) range.push(i);
    } else {
      for (let i = currentPage - 2; i <= currentPage + 2; i++) range.push(i);
    }
    return range;
  };

  useEffect(() => {
    console.log('Page changed:', currentPage);
  }, [currentPage]);

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className="text-gray-700 rounded-md hover:bg-gray-200 disabled:text-gray-300 disabled:cursor-not-allowed"
      >
        <CgPushChevronLeft className="text-xl" />
      </button>

      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-gray-700 rounded-md hover:bg-gray-200 disabled:text-gray-300 disabled:cursor-not-allowed"
      >
        <HiChevronLeft className="text-xl" />
      </button>

      {pageRange().map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={`px-1 py- rounded-md font-semibold ${
            currentPage === pageNumber
              ? 'text-orange-500'
              : 'text-gray-500 hover:text-orange-500'
          }`}
        >
          {pageNumber}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-gray-700 rounded-md hover:bg-gray-200 disabled:text-gray-300 disabled:cursor-not-allowed"
      >
        <HiChevronRight className="text-xl" />
      </button>

      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="text-gray-700 rounded-md hover:bg-gray-200 disabled:text-gray-300 disabled:cursor-not-allowed"
      >
        <CgPushChevronRight className="text-xl" />
      </button>
    </div>
  );
};

export default PageRange;
