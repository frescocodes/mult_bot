require("dotenv").config();
const fs = require("fs");
const { prefix } = require("../config.json");
const { points } = require("./utils/points");
// import Discord
const Discord = require("discord.js");
// instantiate new instance of Discord.Client()
const client = new Discord.Client();
client.commands = new Discord.Collection();

// get available commands
const commandFiles = fs
  .readdirSync("./src/commands/")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  // set a new item in Collection
  // with key as command name and value as exported module
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Ready!");
});

// listen for messages
client.on("message", (message) => {
  // points tracker
  points(message);

  if (
    !message.content.startsWith(prefix) ||
    message.author.bot ||
    message.webhookID
  )
    return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if (!client.commands.has(command)) {
    return;
  } else {
    try {
      client.commands.get(command).execute(message, args);
    } catch (error) {
      console.error(error);
      message.reply("There was an error executing that");
    }
  }
});

client.login(process.env.SB_TOKEN);
