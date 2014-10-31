node-google-fit
===============

NodeJS Google Fit API Module

nodejs access to google fit's REST API.

##Note:

Currently supports everything available, but may be duplicative of the google-api-nodejs-client.  See `demo.js` for usage examples.

This project may be unnecessary... the Official Node.js client may have fit support (but I haven't verified).  You can find it here: https://github.com/google/google-api-nodejs-client/  HOWEVER, the OAuth Playground on google doesn't have most of the REST Calls that are in the Google Fit API page, so maybe not.

This package would also be a little more bare-bones/customizable though, and I'm using it as a learning experience.


##[Getting Started](https://developers.google.com/fit/rest/v1/get-started)

To get started using the Fitness API, you need to create or select a project in the Google Developers Console and Enable the API.

Once you have the authorization tokens, you'll be able to submit requests via ```https://www.googleapis.com/fitness/v1/resourcePath?parameters


##TODO

* ~~List Data Sources~~
* ~~Create a Data Source~~
* ~~Get a specific Data Source~~
* ~~Update a Data Source~~
* Retrieve Shared Data Types
* ~~Get a dataset~~
* ~~Add points to a dataset~~
* ~~Delete a dataset~~
* ~~Create/Insert a Session~~
* ~~List Existing Sessions~~
* ~~Delete a Session~~
* ~~Retrieve a Session (by id)~~
* Look into gzip and other performance tricks: [Performance](https://developers.google.com/fit/rest/v1/performance)
* Generate [Batch Requests](https://developers.google.com/fit/rest/v1/batch)
* Process Batch Responses