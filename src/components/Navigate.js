import React from "react";

import { Link } from "react-router-dom";
export default function Navigate() {
  return (
    <>
      {/* Navrbar Part 1 */}
      <nav className="flex items-center justify-between flex-wrap bg-green-500 p-6">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <span className="font-semibold text-xl tracking-tight">
            REACT CRUD APP
          </span>
        </div>
        {/* <Link to="/"> */}
        <a
          href="./"
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-green-500 hover:bg-white mt-4 lg:mt-0"
        >
          HOME
        </a>
        {/* </Link> */}
      </nav>
      <br />
      {/* Navbar Part 2 */}
      <nav className="flex items-center justify-between flex-wrap bg-green-500 p-6">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <span className="font-semibold text-xl tracking-tight">
            REACT CRUD APP
          </span>
        </div>
        <div>
          <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-green-500 hover:bg-white mt-4 lg:mt-0">
            CREATE
          </button>
        </div>
      </nav>
    </>
  );
}
