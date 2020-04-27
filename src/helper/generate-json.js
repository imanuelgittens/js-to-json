#!/usr/bin/env node

//const _ = require('lodash');
const argv = require('yargs').argv;
// const glob = require('glob');
// const path = require('path');

// const getJSFiles = (filesPath) => {
//   console.log(path.dirname(filesPath));
// };

const generateJSON = (path) => {
  // getJSFiles();
  // return true;
  console.log(path);
};

// run if function was called from the command line
if (require.main === module) {
  //console.log(process.argv);
  //  console.log(argv.path);
  const filesPath = argv.path;
  if (filesPath) {
    generateJSON(filesPath);
  } else {
    console.error('ERROR: Command require a path to your Javascript files');
  }
}
