const getMpData = async () => {
  const res = await fetch("http://localhost:5002/mpdata", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  return data;
};
export default getMpData;
