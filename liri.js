require("dotenv").config;

var keys = require("./keys.js");
var random = require("./random.txt")
var Spotify = require("node-spotify-api");

var fs = require("fs");
var request = require("request");

var spotify = new Spotify(keys.spotify);

var omdbKey = keys.omdb.api_key;

var firstCommand = process.argv[2];
var secondCommand = process.argv[3];

//switch commands
switch (firstCommand) {
    case ("concert-this"):
        concertThis(secondCommand);
        break;
    case ("spotify-this-song"):
        spotifyThisSong(secondCommand);
        break;
    case ("movie-this"):
        movieThis(secondCommand);
        break;
    }
    



//cases
function concertThis(secondCommand) {
    var artist = secondCommand;
    
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    request(queryURL, function (body) {
        var body = JSON.parse(body)
    console.log(body.VenueData.name);
    console.log(body.VenueData.city);
    console.log(body.EventData.datetime);  
    });
}

function spotifyThisSong(secondCommand) {
    var song = secondCommand;
    spotify.search({type: "track",
                    query: song}, 
     function(data){
        var songs = data.tracks.items;

        for (var i = 0; i < songs.length; i++) {
        console.log(i);
        console.log("Artist:" + songs.artists[0]);
        console.log("Name:" + songs.name);
        console.log("Link:" + songs.preview_url);
        console.log("Album:" + songs.album);
        }
    })
}

function movieThis(secondCommand) {
    var movie = secondCommand;
    var queryURL = "http://www.omdbapi.com/?t=" + movie + "&plot=short&tomatoes=true&apikey=" + api_key;   

request(queryURL, function(body){
    var body = JSON.parse(body);
    console.log("Title:" + body.Title);
    console.log("Year:" + body.Year);
    console.log("IMDB rating:" + body.Ratings[0].Value);
    console.log("Rotten Tomatoes rating:" + body.tomatoRating);
    console.log("Country:" + body.Country);
    console.log("Plot:" + body.Plot);
    console.log("Actors:" + body.Actors);

})
}

//function doWhatItSays() { }



      

