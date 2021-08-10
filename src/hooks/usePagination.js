import { useState } from "react";

function usePagination(data, itemsPerPage) {
  //HOOK FOR PAGINATION OF PRODUCTS
  // STATES
  const [currentPage, setCurrentPage]= useState(1)
  //Pages Calc
  const maxPage = Math.ceil(data.length / itemsPerPage);
  //Method.Slice for show pages
  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }
  //turning pages to next and prev
  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }
  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }
  //Jumping to specific page
  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  }

  return { currentData, next, prev, jump };
}

export default usePagination;
