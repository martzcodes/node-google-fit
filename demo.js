var gFit = require('./index.js'),
	config = require('./config.js');
	
var authToken = config.tokens.access_token;

var dataSource =  {
  "dataStreamName": "testDataStream",
  "name": "testStream",
  "type": "derived",
  "application": {
    "detailsUrl": "http://example.com",
    "name": "Foo Example App",
    "version": "1"
  },
  "dataType": {
    "field": [
      {
        "name": "steps",
        "format": "integer"
      }
    ],
    "name": "com.google.step_count.delta"
  },
  "device": {
    "manufacturer": "Example Manufacturer",
    "model": "ExampleTablet",
    "type": "tablet",
    "uid": "1000001",
    "version": "1.0"
  }
};
/*
gFit.createDataSource(authToken,dataSource,function(status,data) {
	console.log('status:',status);
	console.log('data',data);
});
*/

gFit.listDataSources(authToken,function(status,data) {
	console.log('status:',status);
	console.log('data',data);
});
