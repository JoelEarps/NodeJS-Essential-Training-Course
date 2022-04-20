//objects and functions that are globally available 
//many other modules that we work with are hosted by npm and provided by the community
//core modules - come with nodejs
const path = require("path");

/*
//how to link a path
const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

console.log(dirUploads) */

//untilities module
//lots of helper functions - specifically more powerful log function - logs strings but with a date and timestamp
//primary difference is that we have to require it
const util = require('util');

util.log( path.basename(__filename));

util.log("^ Name of the current file");

//v8 module

const v8 = require('v8');

//memory statistcs
util.log(v8.getHeapStatistics());

//all functions we want to use can be destructured out of their modules
//e.g const { getHeapstatistics } = require("v8")



