import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Teams from "./components/teams";
import { Link } from "react-router-dom";

import default function Navigate(){
  return (
      <nav class="flex items-center justify-between flex-wrap bg-green-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">REACT CRUD APP</span>
      </div>
      <Link to="/">
          <button class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-green-500 hover:bg-white mt-4 lg:mt-0">
              HOME
          </button>
      </Link>
      </nav>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Testing App</h1>
      <br />
      <Teams />
    </div>
  );
}

export default App;

// Conts url instead of static url
// https://65b923cbb71048505a8a4706.mockapi.io/teams
// Coding Steps:
// Using the Houses API, or any open API of your choice you can find online, create a single page that allows for all 4 CRUD operations to be performed on a resource from the API.
// Create a React component (or more, if needed) to represent the resource.
// Make all forms and other necessary UI pieces their own components as reasonable.
