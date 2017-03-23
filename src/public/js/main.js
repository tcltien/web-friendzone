// Create Base64 Object
var manifest = null;
var couchbaseData = null;
var app;
$(document).ready(function(){
	  // Initialize Firebase
  	var config = {
	    apiKey: "AIzaSyAbN5EmVQ7xjT3O6JEjWZAwl5CBJXUzVHM",
	    authDomain: "bold-result-157702.firebaseapp.com",
	    databaseURL: "https://bold-result-157702.firebaseio.com",
	    storageBucket: "bold-result-157702.appspot.com",
	    messagingSenderId: "441776107335"
  	};
  	app = firebase.initializeApp(config);
  	var database = firebase.database();
  	var auth = app.auth();
  	
});

