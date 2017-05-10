//requires
var express = require( 'express' );
var app =express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var mongoose = require( 'mongoose' );
//uses
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );
// base URL
app.get( '/', function( req, res ){
res.sendFile( path.resolve( 'public/index.html' ) );
}); // end base URL

app.listen( 8080, 'localhost', function( req, res ){
console.log( 'listening on 8080' );
}); // end app.listen

// 27017 is default mongo port mongoose stuff
mongoose.connect( 'localhost:27017/meanie' );
//schema
var ourSchema = mongoose.Schema({
name: String,
location: String
}); // end Schema
//model
var ourModel = mongoose.model( 'ourModels', ourSchema );
// global
var records = [];


app.get( '/getRecords', function( req, res ){
// get and send back all the things
  ourModel.find().then( function( data ){
    res.send( data );
    console.log('data =', data)
  })
}); // end /getRecords app.get



app.post( '/testPost', function( req, res ){
<<<<<<< HEAD
console.log( 'req.body -> ' , req.body );
=======
console.log( 'req.body: ' , req.body);
>>>>>>> DomDisplay
// retrieved the req.body
// putting it into an object to be saved in the db
var recordToAdd = {
name:req.body.name,
location:req.body.location
};
// create new record
var newRecord = ourModel( req.body );
newRecord.save().then(function (){
  res.sendStatus( 200 );
});
}); // end app.post
