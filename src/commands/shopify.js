const request = require("request");
const { hook } = require("../utils/webhook");

module.exports = {
  name: "shopify",
  description: "Shopify variant scraper",
  execute(message, args) {
    // console.log("MESSAGE", message);
    const options = {
      url: args[0],
      method: "GET",
      headers: {
        Accept: "application/json",
        "Accept-Charset": "utf-8",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0",
      },
    };

    request(options, (err, res, body) => {
      let json = JSON.parse(body);
      const variants = {};
      const name = json.product.title;
      // console.log(json.product.variants);

      json.product.variants.forEach((variant) => {
        variants[variant.title] = variant.id;
      });

      hook(variants, name);
    });
  },
};
