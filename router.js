var router = require('express').Router();

router.use('/user',require('./routes/users'))

module.exports = router;