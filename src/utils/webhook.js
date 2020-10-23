const Discord = require("discord.js");

const WebhookClient = new Discord.WebhookClient(
  process.env.WEBHOOK_ID,
  process.env.WEBHOOK_TOKEN
);

// https://discord.com/api/webhooks/768992382926323724/uZW4meDi9GQOfbXOY_8j2vGwVTxrJvTFhPg2yyLaz_AMiffBLrBjyYXogowbQ-OcX5fm

const hook = function (variants, title) {
  const embed = new Discord.MessageEmbed().setTitle(title).setColor("#71EEB8");

  WebhookClient.send("", {
    username: "Frescop Assistant",
    avatarURL: "https://i.imgur.com/jdwIqvj.png",
    embeds: [{ ...embed, description: `${variants}` }],
  });
};

module.exports = {
  hook,
};
// message.channel.id

//   try {
//     channel
//       .fetchWebbhooks()
//       .then((webhook) => {
//         let foundHook = webhook.find("MUL-T", "MUL-T");

//         if (!foundHook) {
//           channel
//             .createWebhook("Webhook", "https://i.imgur.com/jdwIqvj.png")
//             .then((webhook) => {
//               webhook.send("", {
//                 username: "MUL-T",
//                 avatarURL: "https://i.imgur.com/jdwIqvj.png",
//                 embeds: [
//                   {
//                     color: "#71eeb8",
//                     description: "hello",
//                   },
//                 ],
//               });
//             })
//             .catch((error) => console.log("error", error));
//         } else {
//           console.log("you have a webhook already");
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         return channel.send(
//           "Something went wrong sending the webhook, please check the console."
//         );
//       });
//   } catch {
//     console.log("no");
//   }
