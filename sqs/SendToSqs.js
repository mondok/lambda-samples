var AWS = require('aws-sdk');

exports.handler = function(event, context) {
  var sqs = new AWS.SQS();
  var params = {
    MessageBody: JSON.stringify(event.Records),
    QueueUrl: 'https://sqs.us-east-1.amazonaws.com/path_to_your_queue',
    DelaySeconds: 0
  };

  sqs.sendMessage(params, function(err, data) {
    if(err) {
      console.log(err, err.stack);
      context.done(null, 'Error encountered');
    }
    else {
      context.done(null, 'Success!');
    }
  });
};
