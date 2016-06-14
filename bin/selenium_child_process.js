const selenium = require('selenium-download');
const exec = require('child_process').exec;

selenium.ensure('./bin', function(error) {
  if (error) {
    throw new Error(error);
  } else {
    return start();
  }
});

function start () {
  console.log('Starting Selenium ...');
  require('daemon')();
  exec('java -jar ./bin/selenium.jar', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    if (stdout) {
      console.log(`> ${stdout}`);
    }
    if (stderr) {
      console.log(`>> ${stderr}`); // handle errors in your preferred way.
    }
  });
}