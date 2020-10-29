const request = require("request");
const { hook } = require("../utils/webhook");

module.exports = {
  name: "shopify",
  description: "Shopify variant scraper",
  execute(message, args) {
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
      try {
        const json = JSON.parse(body);
        const variants = {};
        const name = json.product.title; // product title
        const thumbnail = json.product.image.src; // product image
        const cat = json.product.product_type; // product category
        const price = json.product.variants[0].price;

        json.product.variants.forEach((variant) => {
          variants[variant.id] = variant.title;
        });

        const data = Object.keys(variants)
          .map(
            (x) => (variants[x] = x.toString() + "\t\t" + variants[x] + "\n")
          )
          .reduce((a, b) => (a += b), "");

        const final = `\`\`\`\tCart ID\t\t\tSize\n${data}\`\`\``;

        hook(final, name, thumbnail, cat, price);
      } catch {
        console.log("ERROR: ", err);
        message.reply(
          "That link does not appear to contain a Shopify store. Please try again with a Shopify link."
        );
        return;
      }
    });
  },
};
