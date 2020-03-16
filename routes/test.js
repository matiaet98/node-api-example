const express = require('express');
const router = express.Router();

/* GET send test response. */
router.get('/', function(req, res, next) {
  res.json({
    response: "hello world",
    api: "expressjs",
    version: "1"
  })
});

module.exports = router;
