const express = require('express');
var router = express.Router();

router.route('/').get((req, res) => {
    res.send('User')
})
module.exports = router;