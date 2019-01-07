let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    ddb.query({
        TableName: 'New'
    }).promise().then(function (data) {
        console.log(data);
        //your logic goes here
    }).catch(function (err) {
        //handle error
        console.log(err);
    });
    callback(null, { "message": "Successfully executed" });
}