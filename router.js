module.exports = function(routes, app) {
	app.get('/partials/*', function(req, res, next){
		res.set({
			'Content-type': 'text/html; charset=utf-8'
		});

		res.sendfile('app/directive/partials/'+req.params[0]);
	});
	app.get('/img/*', function(req, res, next){
		res.set({
			'Content-type': 'text/html; charset=utf-8'
		});

		res.sendfile('app/img/'+req.params[0]);
	});

	app.get('/', routes.getIndex);

}