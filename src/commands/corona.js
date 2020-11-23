const request = require("request");
const { hook } = require("../utils/webhook");

module.exports = {
  name: "corona",
  description: "COVID-19 statistics scraper",
  execute(message, args) {
    const options = {
      url:
        "https://covid.cdc.gov/covid-data-tracker/COVIDData/getAjaxData?id=tab_notes",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Accept-Charset": "utf-8",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0",
      },
    };

    request(options, (err, res, body) => {
      try {
        const json = JSON.parse(body);
        // console.log("RESPONSE: ", res);
        console.log("JSON", json.body);
        // hook(final, name, thumbnail, cat, price);
      } catch {
        console.log("ERROR: ", err);
        message.reply("Couldn't grab statistics. Please try again later.");
        return;
      }
    });
  },
};
