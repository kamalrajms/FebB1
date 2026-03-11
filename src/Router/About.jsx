import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h2>About component</h2>
      <div className="nested-head">
        <Link to={"WebDevelopment"}>Web development</Link>
        <Link to={"AppDevelopment"}>App development</Link>
      </div>
        <Outlet />
    </div>
  );
}
