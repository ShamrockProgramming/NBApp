const express = require('express');
const router = express.Router();
const redis = require('redis');

let client  = redis.createClient();

//Redis Client
client.on('connect',function(){
    console.log("Connected to redis... on schedule route");
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('a particular teams schedule or all schedules');
});

router.get('/all', function(req, res, next) {
  res.render('leagueschedule');
});

router.get('/addgame', function(req, res, next) {
  res.render('addgame');
});

router.post('/addgame', function(req, res, next) {
    //grab what the user typed in
    let gameid = 'game'+req.body.id;
    let home = req.body.home;
    let away = req.body.away;
    let location = req.body.location;
    let time = req.body.time;
    //talk to the database
    client.hmset(gameid, [
        'home', home,
        'away', away,
        'location', location,
        'time', time
    ],function(err,reply){
        if(err){
            console.log(err);
        }
        else{
            console.log(reply);
            res.redirect('/schedules/all');
        }
    });

});
module.exports = router;
