import React, { Children } from "react";

export default function DashboardLayout({ Children }) {
  return (
    <div>
      <h2 className="font-bold text-5xl py-5">Dashboard Layout</h2>
      <div className="grid grid-cols-12 p-10">
        {/* Nav Site */}
        <div className="col-span-3">
          <ul>
            <li>List</li>
          </ul>
        </div>
        {/* Dashboard Content */}
        <div className="col-span-9 ">
          <ul>
            <li>Details</li>
          </ul>
          {Children}
        </div>
      </div>
    </div>
  );
}
