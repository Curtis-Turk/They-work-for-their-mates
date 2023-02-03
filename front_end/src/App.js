import "./App.css";
import Dropdown from "./dropdown.js";
import { useState, useEffect } from "react";

function App() {
  const [mpData, setMpData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5002/xml", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setMpData(data.data));
  }, []);

  const mpDataElements = mpData?.map((mp) => {
    // return " ";
    return (
      <div key={mp.$.membername}>
        {mp.$.membername}
        {mp.category[0]}
      </div>
    );
  });

  const options = [
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "red", label: "Red" },
    { value: "yellow", label: "Yellow" },
    { value: "orange", label: "Orange" },
    { value: "pink", label: "Pink" },
    { value: "purple", label: "Purple" },
    { value: "grey", label: "Grey" },
  ];

  return (
    <div className="App">
      <Dropdown
        isSearchable
        isMulti
        placeHolder="Select..."
        options={options}
        onChange={(value) => console.log(value)}
      />
      {mpData.length ? mpDataElements : null}

      <Dropdown
        isSearchable
        isMulti
        placeHolder="Select..."
        options={options}
        onChange={(value) => console.log(value)}
      />
    </div>
  );
}

export default App;
