
var schedule = require('node-schedule'),
    path = require('path'),
    AWS = require('aws-sdk');

AWS.config = new AWS.Config({
  region: process.env.AWS_REGION || 'us-east-1'
});

var lambda = new AWS.Lambda();

/**
 * Loading job files
 */
var jobfilestoload = process.argv.slice(2);
if(jobfilestoload.length === 0) {
  console.log("No job file ! ex: node index.js sample-jobs.js");
  console.log("Exiting...");
  process.exit(1);
}
var jobs = [];
jobfilestoload.forEach(function (jobfile) {
  jobs = jobs.concat( require(path.join(process.cwd(), jobfile)) );
});



function scheduleLambda(opts) {

  schedule.scheduleJob(opts.schedule, function(){

      console.log(new Date(), 'Invoking '+opts.lambda.FunctionName);

      lambda.invoke(opts.lambda, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
      });

  });

}

jobs.forEach(scheduleLambda);
