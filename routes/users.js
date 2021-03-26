const { request } = require('express');
var express = require('express');
var router = express.Router();

var blocks = {
  'Name' : 'Jonathan',
  'Age': 38,
  'Alias': 'Anceloth'
};

/* GET users listing. */
router.get('/',function(req,res,next){
  res.json(blocks);
});

router.get('/:fieldName', function(req, res, next) {

  var fieldIncome = req.params.fieldName;
  var block = fieldIncome[0].toUpperCase() + fieldIncome.slice(1).toLowerCase();
  var field = blocks[block]; 
  
  if(!field){
    res.status(404);
  }
  res.json(field);
  //res.json(blocks.slice(0,req.query.limit));  
  
});

module.exports = router;
