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
      try {
        message.channel.bulkDelete(fetched);
      } catch {
        message.reply(
          "Sorry, I cannot bulk delete messages over 15 days old. Please try again."
        );
      }
    }
  },
};
