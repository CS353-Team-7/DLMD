import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PlantListComponent from "./plantList.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
          <div id="branding">
            <h1>DON'T LET ME DIE </h1>
          </div>
          <nav>
            <ul>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
              <li>
                <a href="../DLMD-main/login/login.html">Login</a>
              </li>
              <li>
                <button type="submit" class="button_2">
                  <a href="../DLMD-main/login/login.html">Sign Up</a>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <p>Plant Gallery</p>
        <PlantListComponent></PlantListComponent>
      </header>
    </div>
  );
}

export default App;
