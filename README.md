GetYouTubeSubscribers
This project connects to mongoDb database to fetch youtube subscribers

ExpreeJs
Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js.

Mongoose
Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment

Installation
Use the node package manager npm to install following scripts.

npm i express -g
npm install mongoose
Usage
const express = require('express');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
Execution
Create Database

node createDatabse.js
Main Execution

node index.js
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

License
MIT
