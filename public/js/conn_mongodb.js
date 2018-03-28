var myobj;

function getElem() {
    
    //alert(JSON.stringify(obj));
}

function connParse() {
    //var Parse = requirejs('parse/node');
    
}

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
    
    Parse.initialize("steelcaseErgoSeatEvaId");
    Parse.serverURL = 'https://steelcase-ergo-seat-eva.herokuapp.com/parse'

    getElem();

    var query = new Parse.Query("testNieu");
    query.aggregate(myobj)
    .then(function(results) {
        // results contains sum of score field and stores it in results[0].total
    })
    .catch(function(error) {
        // There was an error.
    });
}

/*
function insert(){
    
    Parse.initialize("steelcaseErgoSeatEvaId");
    Parse.serverURL = 'https://steelcase-ergo-seat-eva.herokuapp.com/parse'

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://heroku_r2m6vcd3:kgbto69i8j3taqpcitt405fe29@ds131826.mlab.com:31826/heroku_r2m6vcd3";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("heroku_r2m6vcd3");
        getElem();
        //var myobj = { Modelo: "Legion Y520", Rapidez: 2, Sonido: 1, Graficos: 1, Satisfaccion: 2, Recomm: "si", Comentario: "lalala", Correo: "coba@gmail.com"};
        dbo.collection("testNieu").insertOne(myobj, function(err, res) {
            if (err) throw err;
            //console.log("1 document inserted");
            alert("Respuestas ingresadas");
            db.close();
        });
    });
}*/





