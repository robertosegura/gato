'use strict';

/**
 * @ngdoc function
 * @name gameApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the gameApp
 */
angular.module('gameApp')
  .controller('RegisterCtrl', ['$location','sharedProperties', function ($location, sharedProperties) {
    var register = this;

    register.username;

    register.addUser = function(){
      if (typeof register.username != 'undefined' && register.username != ''){
        var objectValue = sharedProperties.getObjectregisterCtrl();
        objectValue.username = register.username;

        $location.path('/');
      }
    }


    /*
    register.socket;

    //We register a new user
    register.addUser = function(){

      if (typeof register.username != 'undefined' && register.username != ''){

        if(!register.socket){
          register.socket = io('http://localhost:3000');
          console.log('socket created');
        }else{
          console.log('It is not necessary to create a socket');
        }

        register.socket.on('connect', function(){
          console.log('socked connected');

          console.log('socket emitting');
          register.socket.emit('add user', {
            username: register.username
          });

          console.log('socket received');
          register.socket.on('user joined response', function(data){
            console.log(data);
          });

        });

      }else{

        alert('You need to write a username');

      }
    };*/

  }]);