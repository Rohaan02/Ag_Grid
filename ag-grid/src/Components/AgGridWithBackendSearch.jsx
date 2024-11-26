import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import { useState, useEffect, useRef } from "react";
import { columnData } from "./gridData/Columns";
import debounce from "lodash/debounce"; // Import debounce

const AgGridWithSearchAndPagination = () => {
  const [rowData, setRowData] = useState([]);
  const [quickFilterText, setQuickFilterText] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    // const fetchData = async (searchTerm) => {
    const fetchData = async (searchTerm) => {
      try {
        const response = await fetch(
          `http://localhost:5000/search?q=${searchTerm}`,
          { signal: controller.signal }
        );

        if (response.ok) {
          const data = await response.json();
          setRowData(data);
        } else {
          console.error("Error fetching data");
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request aborted");
        } else {
          console.error("Error:", error);
        }
      }
      // };
    };

    fetchData(quickFilterText);

    return () => {
      controller.abort();
    };
  }, [quickFilterText]);

  return (
    <div>
      <h2 className="mt-2 font-extrabold text-3xl">
        Data Grid with Search and Pagination
      </h2>
      <p>Type in the search bar to filter data from the server.</p>

      {/* Search Input */}
      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={quickFilterText}
          onChange={(e) => setQuickFilterText(e.target.value)}
          className="p-2 border border-gray-300 rounded w-[300px]"
        />
      </div>

      <div className="ag-theme-quartz">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnData}
          pagination={true}
          paginationPageSize={10}
          domLayout="autoHeight"
        />
      </div>
    </div>
  );
};

export default AgGridWithSearchAndPagination;
