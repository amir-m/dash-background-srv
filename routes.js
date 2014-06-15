var self = this,
	models, 
	redisClient;

exports.config = function(m, r){
	models = m;
	redisClient = r;
	return this;
};

// ************************************
//				GET
// ************************************
exports.getIndex = function (req, res){
	res.render('index.html');
};


// ************************************
//				POST
// ************************************
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

exports.postSearch = function (req, res){

	if (!req.param('query')) return res.send(400);

	models.WaitingListEntry.find({ email: { 
		$regex: '\w*'req.param('query')+'\w*', 
		$options: 'i'
	}})
	.exec(function(error, wles){
		if (error) {
			res.send(500);
			throw error;
		}
		console.log(wles);
		return res.send(wles);
	});
};
