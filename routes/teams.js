var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('eventually the team page');
});

router.get('/team/:name', function(req, res){
    res.render('team',{});
});

module.exports = router;
