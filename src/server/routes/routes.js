var router = require('express').Router();
var four0four = require('../utils/404')();
var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
var Character = require('../models/character');

router.get('/characters', getCharacters);
router.delete('/character/:id', deleteCharacter);
router.post('/character', postCharacter);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function getCharacters(req, res){
  Character.findQ().then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json({
      code: 500,
      error: err,
      message: 'There was an error in the database retrieving all characters'
    });
  }).done();
};

function deleteCharacter(req, res){
  // NEEDS TO BE AUTHENTICATED
  // person logged in has access
  // GM can delete any from the game that they are running?
  // admin(me) can delete any character

}

function postCharacter(req, res){
  var query={'personalData.alias': req.body.personalData.alias};
  var update = req.body;
  var options = {upsert: true, new: true};
  Character.findOneAndUpdateQ(query, update, options)
    .then(function(data){
      res.json(data);
    }).catch(function(err){
      res.json({
        code: 404,
        error: err,
        message: 'Character couldn\'t be saved'
      });
    }).done();
}