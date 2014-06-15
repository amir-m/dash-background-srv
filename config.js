module.exports = function(express, app, mongoose, cookie, models, redisClient) {
	// access_token=CAAJXenXN2zMBAKpUjwh3Pe9c2Xr0GLhUmJ5axJn5Xictg5aFIpaYFkC344FLEd22NPZB9VdlLnIdcHPL4ikO8R1QZCzqys0e4omcAyoiONjjFYaB6zfjAv0ZB4eZBdZAVWMOZCQPenVGfct78MoPfdw7rUZCl2ZCD88i0BhlzKvhdzUoG5Vm0pzO
	var async = require('async');

	var connectionString = "mongodb://admin:IuT603JamshEqplE2N&0}x!@candidate.19.mongolayer.com:10061/dbk";
	// var connectionString = "mongodb://admin:foundersfuel2013@54.214.165.124:27017/dashbook";
 
	mongoose.connect(connectionString, function(err){
		if (err) throw err;
		console.log('connected to mongoDB: %s', connectionString);
	});

	app.set('views', __dirname + '/app');
	app.use(require('body-parser')());
	app.use(require('method-override')());
	
	app.use(require('morgan')('dev'));
	app.set('port', process.env.PORT || 8080);

	app.use(express.static(__dirname + '/app'));

};
