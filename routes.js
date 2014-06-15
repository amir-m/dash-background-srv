var self = this,
	models, 
	redisClient;

function config(m, r){
	models = m;
	redisClient = r;
	return this;
};

exports.config = config;