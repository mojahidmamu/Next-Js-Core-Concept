import React, { Children } from "react";

export default function DashboardLayout({ Children }) {
  return (
    <div>
      <h2>Dashboard Layout</h2>
      <div className="grid grid-cols-12 ">
        {/* Nav Site */}
        <div className="col-span-3">
           <ul> 
             <li>Home</li>
           </ul>   
        </div>
        {/* Dashboard Content */}
        <div className="col-span-9">{Children}</div>
      </div>
    </div>
  );
}
