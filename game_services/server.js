// Setup basic express server
var express = require('express');
var app 		= express();
var server 	= require('http').createServer(app);
var io 			= require('socket.io')(server);
var port 		= process.env.PORT || 3000;

// Run the server
server.listen(port, function () {
  console.log('Server listening at port %d', port);
});


// usernames which are currently connected
var usernames = {};
var numUsers  = 0;


io.on('connection', function (socket) {
  var addedUser = false;

  console.log('connection successful');

  // Function to add a new user
  socket.on('add user', function (username) {
    // we store the username in the socket session for this client
    socket.username = username;
    // add the client's username to the global list
    usernames[username] = username;

    ++numUsers;
    addedUser = true;

    console.log('username: ' + username.username);
    console.log('socket emitting');

    // We send a message with the user joined
    socket.emit('user joined response', {
      username: socket.username
    });

    console.log('socket response');

  });


  // We receive the current movement
  socket.on('movement', function(movement){
  	// We send the hash with the data to all
  	socket.emit('movement', movement);
  });

  // We receive when a user won
  socket.on('user winner', function(username){
  	socket.emit('user winner', username);
  })

  socket.emit('user list', usernames);


  // when the user disconnects.. perform this
  socket.on('disconnect', function () {
    // remove the username from global usernames list
    console.log('socket disconnected');
    if (addedUser) {
      delete usernames[socket.username];
      --numUsers;

      // echo globally that this client has left
      socket.emit('user left', {
        username: socket.username
      });
    }
  });

});
