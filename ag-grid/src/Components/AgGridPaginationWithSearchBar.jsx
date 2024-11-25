import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useState } from "react";
import { rowsData } from "./gridData/Rows";
import { columnData } from "./gridData/Columns";

const AgGridPaginationWithSearchBar = () => {
  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [10, 20, 50, 100];
  const [rowData] = useState(rowsData);
  const [colDefs] = useState(
    columnData.map((col) => ({
      ...col,
      filter: true,
    }))
  );
  const [quickFilterText, setQuickFilterText] = useState("");

  return (
    <>
      <h2 className="mt-2 font-extrabold text-3xl">
        Pagination With Search Bar.
      </h2>
      <p>This will filter by checking every cell's character data.</p>
      {/* Search Bar */}
      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={quickFilterText}
          onChange={(e) => setQuickFilterText(e.target.value)}
          className="p-2 border border-gray-300 rounded w-[300px]"
        />
      </div>
      <div
        className="ag-theme-quartz" // applying the Data Grid theme
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
          domLayout="autoHeight"
          quickFilterText={quickFilterText}
        />
      </div>
    </>
  );
};

export default AgGridPaginationWithSearchBar;
