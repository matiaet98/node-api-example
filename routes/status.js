const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  console.log(req);
  res.json({
    vars: process.config.variables,
    cpuUsage: process.cpuUsage(),
    features: process.features,
    listeners: process.getMaxListeners(),
    memUsage: process.memoryUsage(),
    uptime: process.uptime()    
  })
});

module.exports = router;
