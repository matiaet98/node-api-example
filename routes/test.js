const express = require('express');
const router = express.Router();

/* GET send test response. */
router.get('/', function(req, res, next) {
  console.log(req);
  res.json({
    response: "test api 1 OK",
    api: "expressjs",
    version: "1"
  })
});

module.exports = router;
