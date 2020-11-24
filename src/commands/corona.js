const request = require("request");
const fs = require("fs");
const { hook } = require("../utils/webhook");

const data = fs.readFileSync("covid.json", "utf-8");
let parsed = JSON.parse(data);

const options = {
  url:
    "https://covid.cdc.gov/covid-data-tracker/COVIDData/getAjaxData?id=US_MAP_DATA",
  method: "GET",
  headers: {
    Accept: "application/json",
    "Accept-Charset": "utf-8",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0",
  },
};

function getData() {
  request(options, (err, res, body) => {
    try {
      const json = JSON.parse(body);
      // console.log("JSON", json.US_MAP_DATA);
      json.US_MAP_DATA.forEach((state) => {
        parsed[state.abbr] = { ...state };
      });

      let data = JSON.stringify(parsed);
      fs.writeFileSync("covid.json", data);

      // hook(final, name, thumbnail, cat, price);
      console.log("Successfully updated COVID statistics.");
    } catch {
      console.log("ERROR: ", err);
      message.reply("Couldn't grab statistics. Please try again later.");
      return;
    } finally {
      setTimeout(getData, 1800000);
    }
  });
}

getData();

module.exports = {
  name: "corona",
  description: "COVID-19 statistics scraper",
  execute(message, args) {
    if (args.length >= 1) {
      const upper = args[0].toUpperCase();
      8;
      if (upper in parsed) {
        message.reply(
          `${parsed[upper].name} currently has ${parsed[upper].tot_cases} total cases.`
        );
      } else {
        message.reply(
          "Sorry, there isn't a state by that abbreviation, please try again."
        );
      }
    } else {
      message.reply(
        `The United States currently has ${parsed["USA"].tot_cases} total cases.`
      );
    }
  },
};
