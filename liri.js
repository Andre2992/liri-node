require("dotenv").config();
var request = require('request');
var keys = require("./keys");
var spotify = require('spotify_api');
var twitter = require ('twitter_api');
var fs = require('fs');
var spotify = new spotify(keys.spotify);
var client = new twitter (keys.twitter);
// varibles created for the command and user input
// the 
var command = process.argv[2];
var userInput = process.argv[3];


switch (command) {
        case `my-tweets`:
        myTweets();
        break;

        case `spotify-this-song`:
        spotifyThisSong(userInput);
        break;

        case `movie-this`:
        movieLookup(userInput);
        break;

        case `do-what-it-says`:
        doWhatItSays();
        break;

    default:
        break;
}