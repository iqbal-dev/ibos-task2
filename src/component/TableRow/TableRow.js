import React from "react";

const TableRow = ({ data, isChecked }) => {
  return (
    <tr>
      <td>{data.moduleName}</td>
      <td>{data.activityName}</td>
      <td>
        <input
          type="checkbox"
          name=""
          id=""
          onChange={() => {
            isChecked(
              data.isCreate ? { isCreate: false } : { isCreate: true },
              data.id
            );
          }}
          checked={data.isCreate ? "checked" : false}
        />
      </td>
      <td>
        <input
          type="checkbox"
          name=""
          id=""
          onChange={() => {
            isChecked(
              data.isView ? { isView: false } : { isView: true },
              data.id
            );
          }}
          checked={data.isView ? "checked" : false}
        />
      </td>
      <td>
        <input
          type="checkbox"
          name=""
          id=""
          onChange={() => {
            isChecked(
              data.isEdit ? { isEdit: false } : { isEdit: true },
              data.id
            );
          }}
          checked={data.isEdit ? "checked" : false}
        />
      </td>
      <td>
        <input
          type="checkbox"
          name=""
          id=""
          onChange={() => {
            isChecked(
              data.isDelete ? { isDelete: false } : { isDelete: true },
              data.id
            );
          }}
          checked={data.isDelete ? "checked" : false}
        />
      </td>
      <td>
        <input
          type="checkbox"
          name=""
          id=""
          onChange={() => {
            isChecked(
              data.isApprove ? { isApprove: false } : { isApprove: true },
              data.id
            );
          }}
          checked={data.isApprove ? "checked" : false}
        />
      </td>
    </tr>
  );
};

export default TableRow;
