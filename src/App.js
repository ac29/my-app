import "./App.css";
import Form from "./Form";
import Current from "./current";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Form />
            <Current />
            <Forecast />
          </div>
        </div>
      </div>
    </div>
  );
}
