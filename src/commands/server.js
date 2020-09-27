module.exports = {
  name: "Server",
  description: "Displays server name and current member count",
  execute(message, args) {
    message.reply(
      `${message.guild.name} member count is currently: ${message.guild.memberCount}`
    );
  },
};
