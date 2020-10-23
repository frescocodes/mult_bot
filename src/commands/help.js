const fs = require("fs");

const commandFiles = fs.readdirSync("./src/commands").filter((file) => file);

module.exports = {
  name: "help",
  description: "List of valid commands",
  execute(message, args) {
    message.reply(
      "\nHere is a list of commands:" +
        "\n```" +
        commandFiles.map((element) => `\n${element}`) +
        "\n```"
    );
  },
};
