import "./App.css";
import Dropdown from "./components/Dropdown";
import { useState, useEffect } from "react";
import MpCard from "./components/MpCard";

function App() {
  const [mpContribs, setMpContribs] = useState([]);
  const [selectMps, setSelectMps] = useState([]);

  // XLM fetch for mp contributions
  useEffect(() => {
    fetch("http://localhost:5002/xml", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setMpContribs(data.data));
  }, []);

  const mpContribsEls = mpContribs?.map((mp) => {
    let element;
    selectMps?.forEach((selectMp) => {
      if (selectMp.name === mp.$.membername) {
        element = <MpCard mpObj={mp} key={mp.$.membername} />;
      }
    });
    return element;
  });

  const options = mpContribs?.map((mp) => {
    return { name: mp.$.membername, label: mp.$.membername };
  });

  return (
    <div className="App">
      {
        <Dropdown
          isSearchable
          isMulti
          placeHolder="Select..."
          options={options}
          onChange={(value) => setSelectMps(value)}
        />
      }
      {mpContribs.length ? mpContribsEls : null}
      {/* {console.log(mpData)} */}
    </div>
  );
}

export default App;
