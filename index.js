// require the modules we need
// STOP: what are these modules? Use online documentation to read up on them.
var express = require('express');
var path = require('path');
var fs = require('fs');
var ejsLayouts = require("express-ejs-layouts");
var bodyParser = require('body-parser');

var app = express();

// this sets a static directory for the views
app.use(express.static(path.join(__dirname, 'static')));

// using the body parser module
app.use(bodyParser.urlencoded({ extended: false }));

app.use(ejsLayouts);
app.set('view engine', 'ejs');

// Routes begin here

// | GET | /games | index | display a list of all games |
app.get('/games', function(req, res) {
  // this will error out, navigate to your /games route and read the error.
  // What is missing in your views directory?
  res.render('home');
});

// | GET | /games/new | new | return an HTML form for creating a new game |
app.get('/games/new', function (req, res) {
    
});

// | POST | /games | create | create a new game (using form data from /games/new) |

// | GET | /games/:name | show | display a specific game |

// | GET | /games/:name/edit | edit | return an HTML form for editing a game |

// | PUT | /games/:name | update | update a specific game (using form data from /games/:name/edit) |

// | DELETE | /games/:name | destroy | deletes a specific game |


// helper functions

// Read list of games from file.
function getGames() {
    var fileContents = fs.readFileSync('./games.json'); // :'(
    var games = JSON.parse(fileContents);
    return games;
}

// Write list of games to file.
function saveGames(games) {
    fs.writeFileSync('./games.json', JSON.stringify(games));
}

// remove null values from JSON function?

// start the server
var port = 3000;
console.log("http://localhost:" + port);
app.listen(port);
