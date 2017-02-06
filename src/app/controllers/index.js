'use strict';

/**
 * Module dependencies.
 */

var config = require('../../config/config');
var logger =  require('winston').loggers.get('application');
var N1qlQuery = require('couchbase').N1qlQuery;
var fs = require('fs');
var path = require('path');
var basepath = path.dirname(process.mainModule.filename);
var http = require("http");

var admin = require("firebase-admin");
// Fetch the service account key JSON file contents
var serviceAccount = require("/Volumes/Data/keyfirebase/FriendZone-fddf94f055bf.json");


// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bold-result-157702.firebaseio.com"
});

var db = admin.database();



/**
 * Index page
 * @public
 * @param  {HttpRequest} req The HTTP request
 * @param  {HttpResponse} res The HTTP response
 */
exports.index = function(req, res) {
    logger.info('Index page start..........');
	logger.debug('Render index.html');

	var userRef = db.ref("user");
	// save multi user but clear old data
	// userRef.set({
	// 	  alanisawesome: {
	// 	    date_of_birth: "June 23, 1912",
	// 	    full_name: "Alan Turing"
	// 	  },
	// 	  gracehop: {
	// 	    date_of_birth: "December 9, 1906",
	// 	    full_name: "Grace Hopper"
	// 	  }
	// });
	// add 1 user still keep old data
	// db.ref("user/" + 123).set({
	// 	date_of_birth: "33-33-3333",
	// 	full_name: "123"
	// });

	// handle list of data, when many posts save in the same time
	var postsRef = db.ref("posts");
	// Write list of data
	// var newPostRef = postsRef.push();
	// newPostRef.set({
	//   author: "gracehop",
	//   title: "Announcing COBOL, a New Programming Language"
	// });

	// // we can also chain the two calls together
	// postsRef.push().set({
	//   author: "alanisawesome",
	//   title: "The Turing Machine"
	// });
	// // This is equivalent to the calls to push().set(...) above
	// postsRef.push({
	//   author: "gracehop",
	//   title: "Announcing COBOL, a New Programming Language2"
	// });
	

	// read data
	postsRef.on("value", function(snapshot){
		console.log(snapshot.val());
	}, function(errorObject){
		console.log("The read failed: " + errorObject);
	})
	res.render('index2.html', {			
	});		
};








