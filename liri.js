var inquire = require("inquire");
var fs = require("fs");

let song = process.argv[2];
var URL = "http://open.spotify.com/track/6rqhFgbbKwnb9MLmUQDhG6" + song;

axios.get(URL).then(function (response)