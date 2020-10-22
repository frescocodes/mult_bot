module.exports = {
  name: "server",
  description: "Displays server name and current member count",
  execute(message, args) {
    message.reply(
      `${message.guild.name} member count is currently: ${message.guild.memberCount}`
    );
  },
};
