import "./ProductList.css"
import { data } from "../../result"
import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-alpine.css"

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 140,
    sortable: true,
    floatingFilter: true,
  },

  {
    field: "_year",
    headerName: "Year",
    width: 200,
    sortable: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
  },
  {
    field: "month",
    filter: "agTextColumnFilter",
    headerName: "Month",
    width: 150,
    sortable: true,
    floatingFilter: true,
  },
  {
    field: "product",
    filter: "agTextColumnFilter",
    headerName: "Product",
    width: 180,
    sortable: true,
    floatingFilter: true,
  },
  {
    field: "state",
    filter: "agTextColumnFilter",
    headerName: "State",
    width: 250,
    sortable: true,
    floatingFilter: true,
  },
  {
    field: "requirement_in_mt_",
    filter: "agTextColumnFilter",
    headerName: "Requirement (MT)",
    width: 250,
    sortable: true,
    floatingFilter: true,
  },
  {
    field: "availability_in_mt_",
    filter: "agTextColumnFilter",
    headerName: "Availability (MT)",
    width: 190,
    sortable: true,
    floatingFilter: true,
  },
]

function ProductList() {
  return (
    <div className="productList">
      <div>ProductList</div>

      <div className="productListTable">
        <div className="ag-theme-alpine" style={{ width: "100%" }}>
          <AgGridReact
            rowData={data}
            columnHoverHighlight={true}
            columnDefs={columns}
          ></AgGridReact>
        </div>
      </div>
    </div>
  )
}

export default ProductList

// import React, { useState } from "react"
// import "./ProductList.css"
// import { data } from "../../result"
// import { AgGridReact } from "ag-grid-react"
// import "ag-grid-community/dist/styles/ag-grid.css"
// import "ag-grid-community/dist/styles/ag-theme-alpine.css"

// const columns = [
//   { field: "id", headerName: "ID", width: 140 },
//   { field: "_year", headerName: "Year", width: 200 },
//   { field: "month", headerName: "Month", width: 150 },
//   { field: "product", headerName: "Product", width: 180 },
//   { field: "state", headerName: "State", width: 250 },
//   { field: "requirement_in_mt_", headerName: "Requirement (MT)", width: 250 },
//   { field: "availability_in_mt_", headerName: "Availability (MT)", width: 190 },
// ]

// function ProductList() {
//   const [filterText, setFilterText] = useState("")
//   const [gridApi, setGridApi] = useState(null)

//   const onGridReady = (params) => {
//     setGridApi(params.api)
//   }

//   const onFilterTextChange = (e) => {
//     setFilterText(e.target.value)
//     gridApi?.setQuickFilter(e.target.value)
//   }

//   return (
//     <div className="productList">
//       <h2>Product List</h2>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={filterText}
//         onChange={onFilterTextChange}
//         className="searchBox"
//       />
//       <div className="ag-theme-alpine" style={{ height: 500, width: "100%" }}>
//         <AgGridReact
//           rowData={data}
//           columnDefs={columns}
//           onGridReady={onGridReady}
//           animateRows={true}
//         />
//       </div>
//     </div>
//   )
// }

// export default ProductList
