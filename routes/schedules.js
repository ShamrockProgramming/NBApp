var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('a particular teams schedule or all schedules');
});

router.get('/all', function(req, res, next) {
  res.render('leagueschedule');
});

module.exports = router;
