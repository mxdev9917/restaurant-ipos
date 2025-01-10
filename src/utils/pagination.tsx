import  { useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { CgPushChevronLeft,CgPushChevronRight } from "react-icons/cg";

const PageRange = ({ currentPage, totalItems, itemsPerPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber:any) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Determine range of page numbers to display
  const pageRange = () => {
    const range = [];
    const numPages = totalPages > 5 ? 5 : totalPages;  // Show max 5 pages at a time

    // Show page numbers around the current page
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
      {/* Start Button with Icon */}
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className=" text-gray-700 rounded-md hover:bg-gray-200 disabled:text-gray-300 disabled:cursor-not-allowed"
      >
      <CgPushChevronLeft className='  text-xl' />
      </button>

      {/* Previous Button with Icon */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className=" text-gray-700 rounded-md hover:bg-gray-200 disabled:text-gray-300 disabled:cursor-not-allowed"
      >
        <HiChevronLeft className='  text-xl' />
      </button>

      {/* Page Numbers */}
      {pageRange().map((pageNumber) => (
        <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        className={`px-1 py- rounded-md font-semibold
          ${currentPage === pageNumber
            ? 'text-orange-500' // active page will have white text
            : 'text-gray-500 hover:text-orange-500'}` // non-active pages will have gray text and blue hover effect
        }
      >
        {pageNumber}
      </button>
      
      ))}

      {/* Next Button with Icon */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className=" text-gray-700 rounded-md hover:bg-gray-200 disabled:text-gray-300 disabled:cursor-not-allowed"
      >
        <HiChevronRight className='  text-xl' />
      </button>

      {/* End Button with Icon */}
      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className=" text-gray-700 rounded-md hover:bg-gray-200 disabled:text-gray-300 disabled:cursor-not-allowed"
      >
        <CgPushChevronRight className='  text-xl'/>
      </button>
    </div>
  );
};

export default PageRange;
