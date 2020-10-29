const fs = require("fs");
const { fileURLToPath } = require("url");

// base data
const base = { level: 1, needed: 10, points: 1 };

function points(message) {
  let username = message.author.username;
  let discriminator = message.author.discriminator;
  let fullName = `${username}` + "#" + `${discriminator}`;

  try {
    const points = fs.readFileSync("points.json", "utf-8");
    let parsed = JSON.parse(points);

    // if user exists already in points.json
    if (fullName in parsed === true) {
      parsed[fullName].points += 1;

      if (parsed[fullName].points >= parsed[fullName].needed) {
        // increase level
        parsed[fullName].level += 1;
        // multiply points necessary for level up
        parsed[fullName].needed = Math.floor((parsed[fullName].needed *= 1.75));
      }

      // write to file
      let data = JSON.stringify(parsed);
      console.log("DATA: ", data);
      fs.writeFileSync("points.json", data);
      console.log("Points saved.");
    } else {
      // add the user into the points log
      parsed[fullName] = base;
      let data = JSON.stringify(parsed);
      fs.writeFileSync("points.json", data);
    }
  } catch {
    console.log("ERROR", error);
  }
}

module.exports = {
  points,
};
