stackTraceLimit = Infinity;

var cluster = require('cluster'),
	express = require("express"),
	redis = require('redis'),
	app = express(),
	mongoose = require('mongoose'),
	cookie = require('cookie'),
    redisClient, workers = {},
    cpuCount = require('os').cpus().length;
var forked = false;


redisClient = redis.createClient(6379, 'dbkcache.serzbc.0001.usw2.cache.amazonaws.com');

var models = require('./models').config(mongoose, redisClient);

require('./config')(express, app, mongoose, cookie, models, redisClient);

var routes = require('./routes').config(models, redisClient, cookie);

require('./router')(routes, app);

if (cluster.isMaster) {
	for (var i = 0; i < cpuCount; i++) {
		spawn();
	}
	cluster.on('exit', function(worker) {
		console.log('worker ' + worker.id + ' died. spawning a new process...');
		delete workers[worker.pid];
		worker.kill();
		spawn();
	});
} else {
	app.listen(app.get('port'), function() {
		console.log("Listening on " + app.get('port'));
	});
}

// redisClient.on('error', function(error){
// 	console.log(error);
// });


function spawn(){
	var worker = cluster.fork();
	workers[worker.id] = worker;
	console.log('worker ' + worker.id + ' was spawned as a new process...');
	return worker;
};

