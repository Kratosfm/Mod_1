const express = require('express');
const router = express.Router();

router.get('/Francisco', function (req, res){
  res.status(200).send("Soy Francisco, ITC 22 años y ya quiero acabar este verano");
});

router.get('/:name', function (req, res, next) {
  res.status(200).send("Hello " + req.params.name);
});


module.exports = router;
