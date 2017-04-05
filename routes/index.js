var express = require('express');
var router = express.Router();
var mainController = require('../controllers/main_controller');


router.get('/', function(req, res) {
	res.render('index', { title: 'Weather' })
});

router.get('/forecast', function(req, res){
	mainController.sendForecast(req, res);
});


module.exports = router;
