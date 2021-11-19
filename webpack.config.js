const path = require('path');

module.exports = {
  entry: {
	'viewall' : './javascript/viewall.js',
	'createform' : './javascript/createform.js',
	'viewsubmitted' : './javascript/viewsubmitted.js',
	'viewtable' : './javascript/viewtable.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};