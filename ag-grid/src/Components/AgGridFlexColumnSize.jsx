import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useState } from "react";

const GridExample = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "make", flex: 1 },
    { field: "model", flex: 1 },
    { field: "price", flex: 1 },
    { field: "electric", flex: 1 },
  ]);

  return (
    <>
      <h2 className="mt-2 font-extrabold text-3xl">Ag Grid Sizing Column</h2>
      <p>
        Using flex:1 this will set the columns width size for the remaing. Like
        if 2 columns and one have flex 1 and other have flex: 2 than first one
        will have the 1/3 width of whole and second have 2/3 width of whole.
      </p>
      <div
        // wrapping container with theme & size
        className="ag-theme-quartz" // applying the Data Grid theme
        style={{ height: 500 }} // the Data Grid will fill the size of the parent container
      >
        <h2>Sizing the columns</h2>
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
      </div>
    </>
  );
};

export default GridExample;
