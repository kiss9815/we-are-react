var express = require('express');
var router = express.Router();


router.get('/', function(req,res){
    res.json({ 'hi' : 'hi'})
});

router.post('/', function(req, res){
    console.log(JSON.stringify(req.body, null, 2));
    res.json({
        success: true,
        user: req.body.username
    })
});

module.exports = router;