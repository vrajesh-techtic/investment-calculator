import React from "react";
import "../css/table-container.css";

const TableContent = ({ content }) => {
  return (
    <tr className="tableRow">
      {/* Year  */}
      <td>{content.i}</td>
      {/* Investment Value  */}
      <td>&#8377; {content.iv}</td>
      {/* Interest (Year)  */}
      <td>&#8377; {content.iy}</td>
      {/* Total Interest  */}
      <td>&#8377; {content.ti}</td>
      {/* Invested Capital  */}
      <td>&#8377; {content.ic}</td>
    </tr>
  );
};

export default TableContent;
