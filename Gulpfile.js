'use strict';
var gulp = require('gulp');

//////////////////////////////
// Default Tasks
//////////////////////////////
require('./tasks/default')(gulp);


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


//////////////////////////////
// CSS Tasks
//////////////////////////////
require('./tasks/css')(gulp);


//////////////////////////////
// Clean Tasks
//////////////////////////////
require('./tasks/clean')(gulp);


//////////////////////////////
// Refresh Tasks
//////////////////////////////
require('./tasks/refresh')(gulp);


//////////////////////////////
// Copy Tasks
//////////////////////////////
require('./tasks/copy')(gulp);

//////////////////////////////
// Language Tasks
//////////////////////////////
require('./tasks/language')(gulp);


//////////////////////////////
// Page Build Tasks
//////////////////////////////
require('./tasks/page-build')(gulp);
