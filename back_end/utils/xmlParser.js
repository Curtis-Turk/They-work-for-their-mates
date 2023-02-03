import { get } from "https";
import { Parser } from "xml2js";
var parser = new Parser();

const parseXml = () => {
  parser.on("error", function (err) {
    console.log("Parser error", err);
  });

  var data = "";
  let mpData = [];
  get(
    "https://www.theyworkforyou.com/pwdata/scrapedxml/regmem/regmem2023-01-23.xml",
    function (res) {
      if (res.statusCode >= 200 && res.statusCode < 400) {
        res.on("data", function (data_) {
          data += data_.toString();
        });
        res.on("end", function () {
          // console.log("data", data);
          parser.parseString(data, function (err, result) {
            // console.log("FINISHED", err, result);
            console.log(result.publicwhip.regmem);
            // mpData.push(result.publicwhip.regmem);
            // console.log(
            result.publicwhip.regmem.forEach((mp) => {
              mpData.push(mp);
            });
            // );
          });
        });
      }
    }
  );
  return mpData;
};

export default parseXml;
