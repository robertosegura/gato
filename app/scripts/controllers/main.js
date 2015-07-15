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
  	var main = this;

    main.places = [
					{pos: 1, type: ''}, {pos: 2, type: ''}, {pos: 3, type: ''},
                    {pos: 4, type: ''}, {pos: 5, type: ''}, {pos: 6, type: ''},
                    {pos: 7, type: ''}, {pos: 8, type: ''}, {pos: 9, type: ''}
                   ];
  }]);
