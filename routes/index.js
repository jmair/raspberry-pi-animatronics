const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Harvey 2.0' });
});

module.exports = router;
