let express = require('express');
let router = express.Router();

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET users listing. */
router.get('/', (req, res, next) => {
  // res.send('respond with a resource');
  res.json([{
  	id: 1,
  	username: "interviewer"
  }, {
  	id: 2,
  	username: "jenell"
  }]);
});

module.exports = router;
