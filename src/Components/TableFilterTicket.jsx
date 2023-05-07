import React from "react";

const TableFilterTicket = () => {
  return (
    <div className="px-6">
      <div className="flex ">
        <div className="bg-blue-900 text-white px-5 py-2">filter status</div>
        <select className="bg-white">
          <option>Pending</option>
          <option>Arrived</option>
          <option>Resolved</option>
          <option>Rejected</option>
        </select>
      </div>
      <div className="flex justify-between bg-blue-600 px-6 text-white">
        <div>Ticket Id</div>
        <div>Name</div>
        <div>Status</div>
        <div>Level Ticket</div>
        <div>Price</div>
      </div>
    </div>
  );
};

export default TableFilterTicket;
