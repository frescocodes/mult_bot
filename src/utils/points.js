const fs = require("fs");

// base user
const base = { level: 1, needed: 10, points: 1 };

function points(message) {
  try {
    const points = fs.readFileSync("points.json", "utf-8");
    let parsed = JSON.parse(points);
    let user = message.author.id;

    // if user exists already in points.json
    if (user in parsed === true) {
      parsed[user].points += 1;

      if (parsed[user].points >= parsed[user].needed) {
        // increase level
        parsed[user].level += 1;
        // multiply points necessary for level up
        parsed[user].needed = Math.floor((parsed[user].needed *= 1.75));
      }
    } else {
      // add the user into the points log
      parsed[user] = base;
    }
    let data = JSON.stringify(parsed);
    fs.writeFileSync("points.json", data);
  } catch {
    console.error("ERROR", error);
  }
}

module.exports = {
  points,
};
