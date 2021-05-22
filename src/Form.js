import React from "react";

export default function Form() {
  return (
    <div>
      <h1>
        <li className="currentDate" id="date"></li>
        <p>
          <button className="current-button" id="current-button">
            Show weather where I am
          </button>
          <form id="city-form">
            <input type="search" id="city-input" placeholder="City" />
            <input type="submit" value="Search" />
          </form>
        </p>
      </h1>
    </div>
  );
}
