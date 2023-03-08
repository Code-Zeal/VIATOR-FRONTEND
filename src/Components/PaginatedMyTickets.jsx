import React from "react";

export default function PaginatedMyTickets({
  recipesPerPage,
  allRecipes,
  pagination,
  currentPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        <li className="bg-azulOscuro p-2 rounded-lg">
          {pageNumbers?.map((number, index) => (
            <button
              className={
                currentPage === index + 1
                  ? "bg-[#e54848] text-[white]  p-2 rounded-full mx-2"
                  : "bg-[white] p-2 rounded-full mx-2"
              }
              key={`pagina${index}`}
              onClick={() => pagination(number)}
            >
              {number}
            </button>
          ))}
        </li>
      </ul>
    </nav>
  );
}
