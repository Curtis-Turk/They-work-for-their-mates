import "./App.css";
import { useEffect } from "react";

function App() {
  // const [mpData, setMpData] = useState([]);
  // setMpData(parseXml());
  // const mpDataElements = () => {
  //   mpData?.map((mp) => {
  //     return <div>{mp}</div>;
  //   });
  // };

  useEffect(() => {
    fetch("http://localhost:5002/xml", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <div>app</div>
    </div>
  );
}

export default App;
