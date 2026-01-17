import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  //logic
  let calBmi = (e) => {
    e.preventDefault();
    if (weight == 0 || height == 0) {
      alert("Please enter valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("You are underweight");
      } else if (bmi >= 25 && bmi <= 30) {
        setMessage("You are healthy");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calBmi}>
          <div>
            <label>Weight(lbs) </label>
            <input
              type="text"
              placeholder="Enter weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            ></input>
            <label>Height(in) </label>
            <input
              type="number"
              placeholder="Enter Height value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            ></input>
          </div>

          <div>
            <button className="btn" type="submit" >
              Submit
            </button>

            <button className="btn-online" onClick={reload} type="submit">
              Reload
            </button>
          </div>

          <div className="center">
            <h1>Your Bmi is : {bmi}</h1>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
