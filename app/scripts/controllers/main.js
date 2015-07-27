'use strict';

/**
 * @ngdoc function
 * @name gameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gameApp
 */
angular.module('gameApp')
  .controller('MainCtrl', [function () {
    
    //Initialize a variable with this instance
  	var main = this;
    
    //public variables
    /* user.username
    *  user.status -> it could be 'winner' 'looser' 'playing'
    *  user.isValid 
    *  user.type -> it determines the type of movement 'cross' 'circle'
    */
    main.user       = new Object;
    
    main.places = [ 
                    {pos: 1, type: null},
                    {pos: 2, type: null},
                    {pos: 3, type: null},
                    {pos: 4, type: null},
                    {pos: 5, type: null},
                    {pos: 6, type: null},
                    {pos: 7, type: null},
                    {pos: 8, type: null},
                    {pos: 9, type: null}
                   ];

    var users       = {}
    var currentType = 'cross';
    var winners     = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [1,5,9], [2,5,8], [3,6,9], [3,5,7]];
    
    
    main.addUser = function(){
      if(!main.user.isValid){
        
      }
    }
    
    main.clearFields = function(){
      //Just quit the winner status
      main.user.status = 'playing';
      
      //Reset the table with null type of movements
      for (var i = 0; i < main.places.length; i++) {
        main.places[i].type = null;
      }
    }



    main.addMove = function(coordinate){

      if(!main.user.winner){
        if(!coordinate.type){
          coordinate.type = main.currentType;
          main.setType();
          main.verifyWinner(coordinate);
        }else{
          alert('This block already contains a value');
        }
      }else{
        alert('Sorry the game is finished');
      }

    }


    main.setType = function(){
      main.currentType = main.currentType == 'cross' ? 'circle' : 'cross';
    }
/*
    main.verifyWinner = function(coordinate){
      var arrayCoordenadas = [];
      var count = 0;

      for(var k in cat.coordenadas){
        if(cat.coordenadas[k].type == coordinate.type){
          arrayCoordenadas.push(main.place[k].position);
        }
      }

      for(var i in cat.winners){
        for(var j in cat.winners[i]){

          var count = 0;

          for(var l in arrayCoordenadas){
            if(arrayCoordenadas.indexOf(arrayCoordenadas[l])){
              count++;
              //console.log(count);
              if(count == 3){
                main.currentUser.winner = true;
                alert('Felicidades ganaste el juego');
                return;
              }
            }
          }
          //console.log(cat.winners[i][j]);
        }
      }
      //console.log(count);
    }
*/
    main.initConnection = function(){
      var socket = io('http://localhost:3000');

      socket.on('connect', function(){
          console.log('connected');
      });

      socket.emit('add user', {username: 'rob'});

      socket.on('users list', function(data){
        console.log(data);
      });
    }

  }]);
