const express = require('express');
const { Router } = require('express');
const router = express.Router();

/* GET send test response. */
router.get('/', function(req, res, next) {
  console.log(req)
  res.json({
    response: "hello world",
    api: "expressjs",
    version: "1",
    auth: req.headers.authorization
  })
});

module.exports = router;
