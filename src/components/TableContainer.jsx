import React from "react";
import "../css/table-container.css";
import TableContent from "./TableContent";

const TableContainer = ({ data }) => {
  return (
    <table className="tableContainer table  table-hover">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody id="tableBody">
        {data.map((items) => (
          <TableContent key={items.i} content={items} />
        ))}
      </tbody>
    </table>
  );
};

export default TableContainer;
