// Example express application adding the parse-server module to expose Parse
// compatible API routes.

var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var path = require('path');

var databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;

if (!databaseUri) {
  console.log('DATABASE_URI not specified, falling back to localhost.');
}

var api = new ParseServer({
  databaseURI: databaseUri || 'mongodb://heroku_r2m6vcd3:kgbto69i8j3taqpcitt405fe29@ds131826.mlab.com:31826/heroku_r2m6vcd3',
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  appId: process.env.APP_ID || 'steelcaseErgoSeatEvaId',
  masterKey: process.env.MASTER_KEY || 'steelcaseErgoSeatEvaMasterKey', //Add your master key here. Keep it secret!
  serverURL: process.env.SERVER_URL || 'https://steelcase-ergo-seat-eva.herokuapp.com/parse',  // Don't forget to change to https if needed
  liveQuery: {
    classNames: ["Posts", "Comments"] // List of classes to support for query subscriptions
  }
});
// Client-keys like the javascript key or the .NET key are not necessary with parse-server
// If you wish you require them, you can set them as options in the initialization above:
// javascriptKey, restAPIKey, dotNetKey, clientKey

var app = express();

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));

// Serve the Parse API on the /parse URL prefix
var mountPath = process.env.PARSE_MOUNT || '/parse';
app.use(mountPath, api);

// Parse Server plays nicely with the rest of your web routes
app.get('/', function(req, res) {
  res.status(200).send('I dream of being a website.  Please star the parse-server repo on GitHub!');
});

// There will be a test page available on the /test path of your server url
// Remove this before launching your app
app.get('/test', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/test.html'));
});

var port = process.env.PORT || 1337;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('parse-server-example running on port ' + port + '.');
});

// This will enable the Live Query real-time server
ParseServer.createLiveQueryServer(httpServer);



function addElement() {

    var mod = document.getElementById("mod").value;
    var rap = document.getElementById("rap").value;
    var son = document.getElementById("son").value;
    var grap = document.getElementById("grap").value;
    var sat = document.getElementById("sat").value;
    var rec = document.getElementById("rec").value;
    var comm = document.getElementById("comm").value;
    var email = document.getElementById("email").value;

    var myobj = { Modelo: '"'+mod+'"', 
        Rapidez: '"'+rap+'"', 
        Sonido: '"'+son+'"', 
        Graficos: '"'+grap+'"', 
        Satisfaccion: '"'+sat+'"', 
        Recomm: '"'+rec+'"', 
        Comentario: '"'+comm+'"', 
        Correo: '"'+email+'"'};
    
    Parse.initialize("steelcaseErgoSeatEvaId", "steelcaseErgoSeatEvaMasterKey");
    Parse.serverURL = 'https://steelcase-ergo-seat-eva.herokuapp.com/parse'

    var query = new Parse.Query("testNieu");
    query.aggregate(myobj)
    .then(function(results) {
        // results contains sum of score field and stores it in results[0].total
    })
    .catch(function(error) {
        // There was an error.
    });
}