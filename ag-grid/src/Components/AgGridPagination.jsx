import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useState } from "react";
import { rowsData } from "./gridData/Rows";
import { columnData } from "./gridData/Columns";

const AgGridPagination = () => {
  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [10, 20, 50, 100];
  const [rowData] = useState(rowsData);
  const [colDefs] = useState(columnData);

  return (
    <>
      <h2 className="mt-2 font-extrabold text-3xl">Ag Grid with Pagination.</h2>
      <p>By only pagination =true</p>
      <div
        className="ag-theme-quartz" // applying the Data Grid theme
        // style={{ height: 550 }} // the Data Grid will fill the size of the parent container
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
          domLayout="autoHeight"
        />
      </div>
    </>
  );
};

export default AgGridPagination;
