import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from "../../action/action";
import TableRow from "../TableRow/TableRow";
import "./DataTable.css";
const DataTable = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const isChecked = (e, id) => {
    dispatch(updateStatus(e, id));
  };
  console.log(store);
  return (
    <div className="DataTable">
      <table>
        <thead>
          <tr>
            <th>Module Name</th>
            <th>Activity Name</th>
            <th>Create</th>
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Approach</th>
          </tr>
        </thead>
        <tbody>
          {store.map((data, index) => (
            <TableRow data={data} key={index} isChecked={isChecked} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
