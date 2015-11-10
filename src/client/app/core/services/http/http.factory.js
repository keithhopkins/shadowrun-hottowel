(function () {
  'use strict';

  angular
      .module('app.core.services.http')
      .factory('httpservice', httpservice);

  httpservice.$inject = ['$http'/*, '$q', 'exception', 'logger'*/];
  /* @ngInject */
  function httpservice($http/*, $q, exception, logger*/) {
    var service = {
      postCharacter: postCharacter,
      getCharacters: getCharacters,
      deleteCharacter: deleteCharacter,
      getUserCharacters: getUserCharacters,
      saveUserCharacter: saveUserCharacter,
      updateUserCharacter: updateUserCharacter
    };

    return service;


    // mostly for dev testing, should be using saveUserCharacter
    function postCharacter(character){
      console.log('hit post client side');
      return $http.post('/api/character', character);
    }

    function getCharacters(){
      return $http.get('/api/characters');
    }

    function deleteCharacter(id){
      return $http.delete('/api/character/'+id);
    }

    function getUserCharacters(){
      return $http.get('/user/characters');
    }

    function saveUserCharacter(character){
      return $http.post('/user/character', character);
    }

    function updateUserCharacter(character){
      return $http.put('/user/character', character);
    }
  }
})();