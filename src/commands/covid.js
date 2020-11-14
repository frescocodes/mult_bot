const request = require("request");
const { hook } = require("../utils/webhook");

module.exports = {
  name: "covid",
  description: "COVID-19 statistics scraper",
  execute(message, args) {
    const url = "https://www.worldometers.info/coronavirus/";
    const options = {
      url: url,
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
        console.log(json);
      } catch {
        message.reply("Error");
      }
    });
  },
};
