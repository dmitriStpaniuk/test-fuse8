"use client";

import { useSearchStore } from "@/stores/storeCharacter";
import { useShallow } from "zustand/shallow";
const Pagination = () => {
  const { currentPage, result, nextPage, prevPage, setPage } = useSearchStore(
    useShallow((state) => ({
      currentPage: state.currentPage,
      result: state.result,
      nextPage: state.nextPage,
      prevPage: state.prevPage,
      setPage: state.setPage,
    }))
  );

  const totalPages = result.info.pages;
  if (totalPages <= 1) return null;

  const pageNumber = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="mt-4 flex items-center justify-center gap-1 md:gap-2">
      <button
        onClick={() => prevPage()}
        disabled={!result.info.prev}
        className="hidden rounded-md border px-4 py-2 hover:bg-gray-100 disabled:opacity-50 md:block"
      >
        Prev
      </button>

      {pageNumber.map((page, index) => (
        <button
          key={index}
          onClick={() => (typeof page === "number" ? setPage(page) : null)}
          disabled={typeof page !== "number"}
          className={`
            rounded-md border px-3 py-1 text-sm md:px-4 md:py-2 md:text-base 
            ${
              page === currentPage
                ? "bg-[#267504] text-white"
                : "hover:bg-gray-100"
            }
            ${typeof page !== "number" ? "cursor-default border-none" : ""}
          `}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => nextPage()}
        disabled={!result.info.next}
        className="hidden rounded-md border px-4 py-2 hover:bg-gray-100 disabled:opacity-50 md:block"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
