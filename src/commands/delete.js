module.exports = {
  name: "delete",
  description: "Deletes last n messages",
  async execute(message, args) {
    if (parseInt(args[0]) < 2) {
      message.reply("Please state an amount of at least 2");
    } else {
      // delete original command
      message.delete();
      // get n messages
      const fetched = await message.channel.messages.fetch({ limit: args[0] });
      message.channel.bulkDelete(fetched);
    }
  },
};
