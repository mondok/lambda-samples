/*
  Receives a Request from S3 and pushes a message to an ARN.
  You need to make sure your Lambda role has access to SNS first.
*/
var AWS = require('aws-sdk');

exports.handler = function(event, context) {
  var sns = new AWS.SNS();
  var params = {
    Message: JSON.stringify(event.Records),
    Subject: 'S3 Event Received',
    TargetArn: 'sns-arn-here'
  };

  sns.publish(params, function(err, data) {
    if(err) {
      console.log(err, err.stack);
      context.done(null, 'Error encountered');
    }
    else {
      context.done(null, 'Success!');
    }
  });
};
