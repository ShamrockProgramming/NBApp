var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/standings/all', function(req, res){
    res.render('leaguestandings',{});
});

router.get('/league/schedule', function(req, res){
    res.render('leagueschedule',{});
});

module.exports = router;
