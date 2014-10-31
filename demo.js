var gFit = require('./index.js'),
    config = require('./config.js');

var authToken = config.tokens.access_token;

var dataSource =  {
  "dataStreamName": "test",
  "name": "test",
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
/*
gFit.listDataSources(authToken,function(status,data) {
	console.log('status:',status);
	console.log('data',data);
});
*/
var getsource = 'derived:com.google.step_count.delta:866555810975:Example Manufacturer:ExampleTablet:1000001:test';
/*
gFit.getDataSource(authToken,getsource,function(status,data) {
	console.log('status:',status);
	console.log('data',data);	
});
*/
/*
var updatedDataSource = {
    "dataStreamId": getsource,
    "dataStreamName": "",
    "name": "",
    "type": "derived",
    "application": {
        "detailsUrl": "http://notexample.com",
        "name": "FooBar Example App",
        "version": "1"
    },
    "dataType": {
        "field": [{
            "name": "steps",
            "format": "integer"
        }],
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
*/

/*
gFit.updateDataSource(authToken, getsource, updatedDataSource, function(status, data) {
    console.log('data', data);
});
*/

var newpoints = {
  "minStartTimeNs": 1397513334728708316,
  "maxEndTimeNs": 1397515179728708316,
  "dataSourceId": getsource,
  "point": [
    {
      "startTimeNanos": 1397513334728708316,
      "endTimeNanos": 1397515145728708316,
      "dataTypeName": "com.google.step_count.delta",
      "originDataSourceId": "",
      "value": [
        {
          "intVal": 10,
        }
      ]
    },
    {
      "startTimeNanos": 1397515149728708316,
      "endTimeNanos": 1397515179728708316,
      "dataTypeName": "com.google.step_count.delta",
      "originDataSourceId": "",
      "value": [
        {
          "intVal": 3,
        }
      ]
    }
  ]
};

var updateset = newpoints.minStartTimeNs+'-'+newpoints.maxEndTimeNs;
/*
gFit.updateDataset(authToken,getsource,updateset,newpoints,function(status,data){
	console.log('data',data);
});
*/
/*
gFit.getDataset(authToken,getsource,updateset,function(status,data){
	console.log('data',data);
});
*/
/*
gFit.deleteDataset(authToken,getsource,updateset,function(status,data){
	console.log('data',data);
});
*/
/*
var endDate = new Date(1396713600000);
var startDate = new Date(endDate.setHours(endDate.getHours()-1));
startDate.toJSON();
endDate = endDate.toJSON();
gFit.listExistingSessions(authToken,startDate,endDate,function(status,data){
	console.log('data',data);
});
*/
var newsessionid = "someSessionId";
var newsession = {
  "id": newsessionid,
  "name": "My example workout",
  "description": "A very intense workout",
  "startTimeMillis": 1396710000000,
  "endTimeMillis": 1396713600000,
  "version": 1,
  "lastModifiedToken": "exampleToken",
  "application": {
    "detailsUrl": "http://example.com",
    "name": "Foo Example App",
    "version": "1.0"
  },
  "activityType": 1
};
/*
gFit.insertSession(authToken,newsessionid,newsession,function(status,data){
	console.log('data',data);
});
*/
/*
gFit.getSession(authToken,newsessionid,function(status,data){
	console.log('data',data);
});
*/
/*
gFit.deleteSession(authToken,newsessionid,function(status,data){
	console.log('data',data);
});
*/