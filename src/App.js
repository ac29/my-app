import "./App.css";
import Form from "./Form";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Form defaultCity = "Toronto"/>
          </div>
        </div>
      </div>
      <a href="https://github.com/ac29/my-app" target="blank"> Open Source Code </a>
      <span>by Alham Chelehmalzadeh</span>
    </div>
  );
}
