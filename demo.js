var gFit = require('./index.js'),
    config = require('./config.js');

var authToken = config.tokens.access_token;

var dataSource =  {
  "dataStreamName": "",
  "name": "",
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
/*
gFit.listDataSources(authToken,function(status,data) {
	console.log('status:',status);
	console.log('data',data);
});
*/
var getsource = 'derived:com.google.step_count.delta:866555810975:Example Manufacturer:ExampleTablet:1000001:';
/*
gFit.getDataSource(authToken,getsource,function(status,data) {
	console.log('status:',status);
	console.log('data',data);	
});
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
  "dataSourceId": getsource,
  "maxEndTimeNs": 1397515179728708316,
  "minStartTimeNs": 1397513334728708316,
  "point": [
    {
      "dataTypeName": "com.google.step_count.delta",
      "endTimeNanos": 1397513365565713993,
      "originDataSourceId": "",
      "startTimeNanos": 1397513334728708316,
      "value": [
        {
          "intVal": 8
        }
      ]
    },
    {
      "dataTypeName": "com.google.step_count.delta",
      "endTimeNanos": 1397513675197854515,
      "originDataSourceId": "",
      "startTimeNanos": 1397513530098955298,
      "value": [
        {
          "intVal": 3
        }
      ]
    },
    {
      "dataTypeName": "com.google.step_count.delta",
      "endTimeNanos": 1397513764101240710,
      "originDataSourceId": "",
      "startTimeNanos": 1397513817073528237,
      "value": [
        {
          "intVal": 6
        }
      ]
    },
    {
      "dataTypeName": "com.google.step_count.delta",
      "endTimeNanos": 1397513938674093579,
      "originDataSourceId": "",
      "startTimeNanos": 1397514015761859752,
      "value": [
        {
          "intVal": 5
        }
      ]
    },
    {
      "dataTypeName": "com.google.step_count.delta",
      "endTimeNanos": 1397514106400006675,
      "originDataSourceId": "",
      "startTimeNanos": 1397514181893785805,
      "value": [
        {
          "intVal": 4
        }
      ]
    },
    {
      "dataTypeName": "com.google.step_count.delta",
      "endTimeNanos": 1397514304850163634,
      "originDataSourceId": "",
      "startTimeNanos": 1397514356883524220,
      "value": [
        {
          "intVal": 16
        }
      ]
    },
    {
      "dataTypeName": "com.google.step_count.delta",
      "endTimeNanos": 1397514518794639297,
      "originDataSourceId": "",
      "startTimeNanos": 1397514526864527756,
      "value": [
        {
          "intVal": 13
        }
      ]
    },
    {
      "dataTypeName": "com.google.step_count.delta",
      "endTimeNanos": 1397514741275742506,
      "originDataSourceId": "",
      "startTimeNanos": 1397514626480314270,
      "value": [
        {
          "intVal": 18
        }
      ]
    },
    {
      "dataTypeName": "com.google.step_count.delta",
      "endTimeNanos": 1397514813435152213,
      "originDataSourceId": "",
      "startTimeNanos": 1397514839292833196,
      "value": [
        {
          "intVal": 17
        }
      ]
    },
    {
      "dataTypeName": "com.google.step_count.delta",
      "endTimeNanos": 1397515179728708316,
      "originDataSourceId": "",
      "startTimeNanos": 1397515170565969137,
      "value": [
        {
          "intVal": 11
        }
      ]
    }
  ]
};
/*
var updateset = newpoints.minStartTimeNs+'-'+newpoints.maxEndTimeNs;
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
gFit.deleteSession(authToken,newsessionid,function(status,data){
	console.log('data',data);
});