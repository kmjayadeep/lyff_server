var express = require('express');
var router = express.Router();
var User = require('../models/User')
var md5 = require('MD5')

router.put('/', function(req, res) {
    var user = new User(req.body)
    if (!user.username)
        return res.status(400).json({
            message: "Enter username"
        })
    user.password = md5(user.password || '')
    user.save(function(err, u) {
        if (err) {
            if (err.code == 11000)
                return res.status(400).json({
                    message: 'Username already exist'
                })
            return res.status(400).json({
                message: err
            })
        }
        res.json(user)
    })
})

module.exports = router;
