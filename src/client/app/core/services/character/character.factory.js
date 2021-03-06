(function() {
  'use strict';

  angular.module('app.core.services.character')
    .factory('characterservice', characterFactory);

  function characterFactory() {

    var character = {
      attributes: {
        body: 1,
        strength: 1,
        agility: 1,
        reaction: 1,
        charisma: 1,
        intuition: 1,
        logic: 1,
        will: 1,
        magic: 0,
        resonance: 0,
        edge: 1
      },
      personalData: {},
      items: {
        ware: [],
        weapons: []
      },
      skills: [],
      qualities: []
    };

    var factory = {
      reset: reset,

      setMetatype: setMetatype,
      setCharacter: setCharacter,
      setClass: setClass,

      getMetatype: getMetatype,
      getAttributes: getAttributes,
      getSkills: getSkills,
      getKnowledge: getKnowledge,
      getPersonalData: getPersonalData,
      getItems: getItems,
      getQualities: getQualities,
      getCharacter: getCharacter,
      getClass: getClass,
      getWeapons: getWeapons,
      getWare: getWare
    };

    return factory;


    // exported functions
    function reset(){
      console.log(character.skills);
      character.skills.splice(0, character.skills.length);
      
      console.log('character', character);
    }

    function setMetatype(meta) {
      character.personalData.metatype = meta;
    }

    function setClass(cl) {
      character.class = cl;
    }

    function setCharacter(char) {
      angular.merge(character, char);
    }

    function getMetatype() {
      return character.personalData.metatype;
    }

    function getAttributes() {
      return character.attributes;
    }

    function getSkills() {
      return character.skills;
    }

    function getKnowledge() {
      return character.knowledge;
    }

    function getPersonalData() {
      return character.personalData;
    }

    function getQualities() {
      return character.qualities;
    }

    function getItems() {
      return character.items;
    }

    function getCharacter() {
      return character;
    }

    function getClass() {
      return character.class;
    }

    function getWeapons() {
      return character.items.weapons;
    }

    function getWare() {
      return character.items.ware;
    }
  }

})();
