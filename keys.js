var env = require("dotenv").config();

var omdb = {
  api_key: "trilogy"
}

console.log('this is loaded');

var spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
