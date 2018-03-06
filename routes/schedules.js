var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('a particular teams schedule or all schedules');
});


module.exports = router;
