node-google-fit
===============

NodeJS Google Fit API Module

nodejs access to google fit's REST API.

##Note:

This project may be unnecessary... the Official Node.js client may have fit support.  You can find it here: https://github.com/google/google-api-nodejs-client/

This package would be a little more bare-bones/customizable though, and I'm using it as a learning experience.

##[Getting Started](https://developers.google.com/fit/rest/v1/get-started)

To get started using the Fitness API, you need to create or select a project in the Google Developers Console and Enable the API.

Once you have the authorization tokens, you'll be able to submit requests via ```https://www.googleapis.com/fitness/v1/resourcePath?parameters


##TODO

* List Data Sources
* Create a Data Source
* Get a specific Data Source
* Update a Data Source
* Create a Custom Data Type
* Insert Data into a data type
* Retrieve Data from a data type
* Retrieve Shared Data Types
* Get a dataset
* Add points to a dataset
* Delete a dataset
* Create a Session
* Insert a Session
* List Existing Sessions
* Delete a Session
* Retrieve a Session
* Look into gzip and other performance tricks: [Performance](https://developers.google.com/fit/rest/v1/performance)
* Generate [Batch Requests](https://developers.google.com/fit/rest/v1/batch)
* Process Batch Responses