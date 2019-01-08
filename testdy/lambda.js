let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    ddb.query({
        TableName: 'New',
        ExpressionAttributeValues: {
            ':Name': 'test_name'
        }
    }).promise().then(function (data) {
        //your logic goes here
    }).catch(function (err) {
        //handle error
    });


    callback(null, { "message": "Successfully executed" });
}




