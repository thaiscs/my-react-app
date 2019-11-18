import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div class="article card">
      <div class="row">
        <div class="col half">
          <img src="https://www.realestate.com.au/blog/images/1200x900-fit,progressive/2019/05/03143311/stark-cropped.jpg" />
        </div>
        <div class="col half">
          <h2>What is React all about?</h2>
          <p>
            React is all about one-way data flow, the Virtual DOM, and
            transpiling JSX.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
