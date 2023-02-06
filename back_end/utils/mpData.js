import fs from "fs";

function readCSVFile(filePath) {
  let data = fs.readFileSync(filePath, "utf-8");
  let lines = data.split("\n");
  let result = [];
  for (let i = 1; i < lines.length; i++) {
    let line = lines[i];
    let fields = line.split(",");
    result.push({
      FirstName: fields[1],
      LastName: fields[2],
      Party: fields[3],
      Constituency: fields[4],
      URI: fields[5],
    });
  }
  return result;
}

export default readCSVFile;
