import { get } from "https";
import { resolve } from "path";
import { Parser } from "xml2js";
var parser = new Parser();

const parseXml = async () => {
  parser.on("error", function (err) {
    console.log("Parser error", err);
  });

  let data = "";
  return new Promise((resolve, reject) => {
    get(
      "https://www.theyworkforyou.com/pwdata/scrapedxml/regmem/regmem2023-01-23.xml",
      (res) => {
        if (res.statusCode >= 200 && res.statusCode < 400) {
          res.on("data", function (data_) {
            data += data_.toString();
          });
          res.on("end", function () {
            parser.parseString(data, (err, result) => {
              let mpData = [];

              result.publicwhip.regmem.forEach((mp) => {
                mpData.push(mp);
              });
              resolve(mpData);
            });
          });
        }
      }
    );
  });
};

export default parseXml;
