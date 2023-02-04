import "./App.css";
import Dropdown from "./components/Dropdown";
import { useState, useEffect } from "react";
import MpCard from "./components/MpCard";

function App() {
  const [mpData, setMpData] = useState([]);
  const [selectMps, setSelectMps] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5002/xml", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setMpData(data.data));
  }, []);

  const mpDataElements = mpData?.map((mp) => {
    let element;
    selectMps?.forEach((selectMp) => {
      if (selectMp.name === mp.$.membername) {
        element = <MpCard mpObj={mp} />;
      }
    });
    return element;
  });

  const options = mpData?.map((mp) => {
    return { name: mp.$.membername, label: mp.$.membername };
  });
  // const options = [
  //   //example
  //   { name: "Theresa May", label: "Theresa May" },
  //   { value: "Jacob Rees-Mogg", label: "Jacob Rees-Mogg" },
  //   { value: "Rishi Sunak", label: "Rishi Sunak" },
  //   { value: "Nadhim Zahawi", label: "Nadhim Zahawi" },
  //   { value: "yellow", label: "Yellow" },
  //   { value: "orange", label: "Orange" },
  //   { value: "pink", label: "Pink" },
  //   { value: "purple", label: "Purple" },
  //   { value: "grey", label: "Grey" },
  // ];

  return (
    <div className="App">
      <Dropdown
        isSearchable
        isMulti
        placeHolder="Select..."
        options={options}
        onChange={(value) => setSelectMps(value)}
      />

      {mpData.length ? mpDataElements : null}
    </div>
  );
}

export default App;
