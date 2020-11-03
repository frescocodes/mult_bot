const fs = require("fs");

module.exports = {
  name: "points",
  description: "retrieve user's points",
  execute(message, args) {
    try {
      const data = fs.readFileSync("points.json", "utf-8");
      let parsed = JSON.parse(data);
      const user = message.author.id;

      if (user in parsed === true) {
        message.reply(
          `You currently have ${parsed[user].points} points and are level ${parsed[user].level}`
        );
      } else {
        // should never enter this else block, but just in case
        message.reply(
          "Sorry, you don't currently have any points (but should now), please try again."
        );
      }
    } catch {
      console.error(error);
    }
  },
};
