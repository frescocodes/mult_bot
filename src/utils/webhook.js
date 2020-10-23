const Discord = require("discord.js");

const WebhookClient = new Discord.WebhookClient(
  process.env.WEBHOOK_ID,
  process.env.WEBHOOK_TOKEN
);

const hook = function (variants, title, thumb, desc, cat, price) {
  const embed = new Discord.MessageEmbed().setTitle(title).setColor("#71EEB8");

  WebhookClient.send("", {
    username: "Frescop Assistant",
    avatarURL: "https://i.imgur.com/jdwIqvj.png",
    embeds: [
      {
        ...embed,
        description: "",
        thumbnail: { url: thumb, height: 5, width: 5 },
        fields: [
          {
            name: "Category",
            value: cat,
            inline: true,
          },
          {
            name: "Price",
            value: price,
            inline: true,
          },
          {
            name: "Variants",
            value: variants,
            inline: false,
          },
        ],
        footer: {
          text: "Made by fresco",
          icon_url: "https://i.imgur.com/YAdn3yv.gif",
        },
      },
    ],
  });
};

module.exports = {
  hook,
};
