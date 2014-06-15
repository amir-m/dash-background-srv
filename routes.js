var self = this,
	models, 
	redisClient;

exports.config = function(m, r){
	models = m;
	redisClient = r;
	return this;
};

exports.getIndex = function (req, res){
	res.render('index.html');
};

exports.postLogin = function (req, res){

	if (!req.param('email') || !req.param('pass')) return res.send(401);

	if (req.param('email').toLowerCase() != 'amir@dashbook.co' 
		&& req.param('email').toLowerCase() != 'mo@dashbook.co') return res.send(401);

	if (req.param('email').toLowerCase() == 'amir@dashbook.co' 
		&& req.param('pass') == 'Yhs4#l:a@=Qs_yC!') return res.send(200);

	if (req.param('email').toLowerCase() == 'mo@dashbook.co' 
		&& req.param('pass') == 'G@dxAkMhg_9%2B>z') return res.send(200);

	return res.send(401);
};
