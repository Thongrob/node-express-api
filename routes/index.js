var express = require('express');
var router = express.Router();
const {getInfo} = require('../controllers/getInfo');
const {insert} = require('../controllers/insert');


router.get('/getinfo', getInfo)
router.post('/insert', insert)

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
