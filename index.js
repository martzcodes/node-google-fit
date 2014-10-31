var https = require('https');

var httpsDown = function(options,callback) {
	var req = https.request(options,function(res){
		console.log('statusCode:',res.statusCode);
		console.log('headers:',res.headers);
		var datastring = '';
		res.on('data',function(d) {
			datastring += d;
		});
		res.on('end',function(d) { //check this
			callback(res.statusCode,datastring);
		});
	
	});
	req.end();
	
	req.on('error', function(e) {
		console.log('error',e);
		callback(null);
	});
};

var httpsUp = function(options,data,callback) {
	var req = https.request(options,function(res){
		console.log('statusCode:',res.statusCode);
		console.log('headers:',res.headers);
		var datastring = '';
		res.on('data',function(d) {
			datastring += d;
		});
		res.on('end',function(d) { //check this
			callback(res.statusCode,datastring);
		});
	
	});
	req.write(data); //check this
	req.end();
	
	req.on('error', function(e) {
		console.log('error',e);
		callback(null);
	});
};

exports.createDataSource = function(authToken,dataSource,callback) {
	if( (typeof dataSource == "object") && (dataSource !== null) ) {
	    dataSource = JSON.stringify(dataSource);
	}

	var site = 'www.googleapis.com';
	var path = '/fitness/v1/users/me/dataSources';

	var headers = {
		Authorization: 'Bearer '+authToken,
		'Content-Length': Buffer.byteLength(dataSource),
		'Content-Type': 'application/json;encoding=utf-8'
	};
	
	var options = {
		hostname:site,
		port:443,
		path:path,
		headers:headers,
		method:'POST'
	};
	
	httpsUp(options,dataSource,callback);
};

exports.listDataSources = function(authToken,callback) {
	var site = 'www.googleapis.com';
	var path = '/fitness/v1/users/me/dataSources';

	var headers = {
		Authorization: 'Bearer '+authToken,
		'Content-Type': 'application/json;encoding=utf-8'
	};
	
	var options = {
		hostname:site,
		port:443,
		path:path,
		headers:headers,
		method:'GET'
	};
	
	httpsDown(options,callback);
};

exports.getDataSource = function(authToken,dataSource,callback) {
	var site = 'www.googleapis.com';
	var path = '/fitness/v1/users/me/dataSources/'+dataSource;

	var headers = {
		Authorization: 'Bearer '+authToken,
		'Content-Type': 'application/json;encoding=utf-8'
	};
	
	var options = {
		hostname:site,
		port:443,
		path:path,
		headers:headers,
		method:'GET'
	};
	
	httpsDown(options,callback);
};

exports.updateDataSource = function(authToken,dataSource,updatedDataSource,callback) {
	if( (typeof updatedDataSource == "object") && (updatedDataSource !== null) ) {
	    updatedDataSource = JSON.stringify(updatedDataSource);
	}
	var site = 'www.googleapis.com';
	var path = '/fitness/v1/users/me/dataSources/'+data-source;

	var headers = {
		'Content-Length': Buffer.byteLength(updatedDataSource),
		Authorization: 'Bearer '+authToken,
		'Content-Type': 'application/json;encoding=utf-8'
	};
	
	var options = {
		hostname:site,
		port:443,
		path:path,
		headers:headers,
		method:'PUT'
	};
	
	httpsUp(options,updatedDataSource,callback);
};

exports.updateDataset = function(authToken,dataSource,dataset,newpoints,callback) {
	if( (typeof newpoints == "object") && (newpoints !== null) ) {
	    newpoints = JSON.stringify(newpoints);
	}

	var site = 'www.googleapis.com';
	var path = '/fitness/v1/users/me/dataSources/'+data-source+'/datasets/'+dataset;

	var headers = {
		'Content-Length': Buffer.byteLength(newpoints),
		Authorization: 'Bearer '+authToken,
		'Content-Type': 'application/json;encoding=utf-8'
	};
	
	var options = {
		hostname:site,
		port:443,
		path:path,
		headers:headers,
		method:'PATCH'
	};
	
	httpsUp(options,newpoints,callback);
};

exports.getDataset = function(authToken,dataSource,dataset,newpoints,callback) {
	var site = 'www.googleapis.com';
	var path = '/fitness/v1/users/me/dataSources/'+data-source+'/datasets/'+dataset;

	var headers = {
		Authorization: 'Bearer '+authToken,
		'Content-Type': 'application/json;encoding=utf-8'
	};
	
	var options = {
		hostname:site,
		port:443,
		path:path,
		headers:headers,
		method:'GET'
	};
	
	httpsDown(options,callback);
};

exports.insertSession = function(authToken,sessionid,session,callback) {
	if( (typeof session == "object") && (session !== null) ) {
	    session = JSON.stringify(session);
	}
	var site = 'www.googleapis.com';
	var path = '/fitness/v1/users/me/sessions/'+sessionid;

	var headers = {
		Authorization: 'Bearer '+authToken,
		'Content-Length': Buffer.byteLength(session),
		'Content-Type': 'application/json;encoding=utf-8'
	};
	
	var options = {
		hostname:site,
		port:443,
		path:path,
		headers:headers,
		method:'PUT'
	};
	
	httpsUp(options,session,callback);
};

exports.listExistingSessions = function(authToken,startDate,endDate,callback) {
	var site = 'www.googleapis.com';
	var path = '/fitness/v1/users/me/sessions?starttime='+start-date+'&endTime='+end-date;

	var headers = {
		Authorization: 'Bearer '+authToken,
		'Content-Type': 'application/json;encoding=utf-8'
	};
	
	var options = {
		hostname:site,
		port:443,
		path:path,
		headers:headers,
		method:'GET'
	};
	
	httpsDown(options,callback);
};