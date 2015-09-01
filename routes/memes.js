var express = require('express');
var router = express.Router();
var memes= require('../models/memes');
var sentences = require('../models/sentences');
var fs = require('fs');



router.get('/', function(req, res, next){
    res.render('memes', {memes: memes, sentences: sentences});
});

router.post('/', function(req, res, next){
    console.log(req.body);
    var newSentences = sentences;
    newSentences.push(req.body);
    fs.writeFile('../models/sentences.json', JSON.stringify(newSentences) , 'utf-8', function (err) {
        console.log('Wrote Data');
        if (err) return console.log(err);

    });
    res.render('memes', {memes: memes, sentences: sentences});
});

module.exports = router;


