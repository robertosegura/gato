'use strict';

/**
 * @ngdoc service
 * @name gameApp.sharedProperties
 * @description
 * # sharedProperties
 * Service in the gameApp.
 */
angular.module('gameApp')
  .service('sharedProperties', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var objectRegisterCtrl = {
      username: '',
      counter: 0
    }

    return {
      getObjectregisterCtrl: function(){
        return objectRegisterCtrl;
      }
    }

  });
