'use strict';
var gulp = require('gulp');


//////////////////////////////
// ESLint Tasks
//////////////////////////////
require('./tasks/eslint')(gulp);


//////////////////////////////
// Watch Tasks
//////////////////////////////
require('./tasks/watch')(gulp);


//////////////////////////////
// Sass Tasks
//////////////////////////////
require('./tasks/sass')(gulp);


//////////////////////////////
// Server Tasks
//////////////////////////////
require('./tasks/server')(gulp);


//////////////////////////////
// Sass Lint Tasks
//////////////////////////////
require('./tasks/scsslint')(gulp);


//////////////////////////////
// Build Tasks
//////////////////////////////
require('./tasks/build')(gulp);

//////////////////////////////
// Lint Tasks
//////////////////////////////
require('./tasks/lint')(gulp)


//////////////////////////////
// Swig Tasks
//////////////////////////////
require('./tasks/swig')(gulp);
