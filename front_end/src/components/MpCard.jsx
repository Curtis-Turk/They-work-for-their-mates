import { useState } from "react";

function MpCard({ mpObj }) {
  const [details, setDetails] = useState([]);

  const name = mpObj.$.membername;
  const contributions = mpObj.category;

  const seeDetails = () => {
    setDetails(
      contributions.map((contrib) => {
        let name = contrib.$.name;
        let description = contrib.record[0].item[0]._;
        return (
          <div key={name}>
            <div>Name: {name}</div>
            <div>Description: {description}</div>
          </div>
        );
      })
    );
  };

  return (
    <div key={name}>
      <div>{name}</div>
      <button onClick={seeDetails}>See details</button>
      <div>{details ? details : null}</div>
    </div>
  );
}
export default MpCard;
