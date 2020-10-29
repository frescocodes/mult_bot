const fs = require("fs");

// import points

module.exports = {
  name: "points",
  description: "point counter for user posts",
  execute(message, args) {
    console.log("points increased");
  },
};
