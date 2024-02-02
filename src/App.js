import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Teams from "./components/teams";
import Navigate from "./components/Navigate";

function App() {
  return (
    <div className="App">
      <h1>Testing App</h1>
      <br />
      <Navigate />
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
