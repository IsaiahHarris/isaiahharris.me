const AWS = require('aws-sdk');
const process = require('process');
AWS.config.update({ region: 'us-east-1' });

const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });
const sns = new AWS.SNS({ apiVersion: '2010-03-31' });

module.exports.sendInfo = (event, context, callback) => {
  let { name, email, subject, message } = JSON.parse(event.body);

  let topicARN = process.env.ARN; //environmental variable with ARN

  var dynamoParams = {
    Item: {
      Name: {
        S: name
      },
      Email: {
        S: email
      },
      Subject: {
        S: subject
      },
      Message: {
        S: message
      }
    },
    TableName: 'ContactInfo'
  };

  dynamodb.putItem(dynamoParams, (err, data) => {
    if (err) {
      const response = {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify(err.stack)
      };
      callback(null, response);

      let snsFailParams = {
        Message: `
        WEBSITE MESSAGE FAILED TO STORE IN DYNAMO
        (CHECK CLOUDFRONT)
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
        `,
        MessageStructure: 'string',
        TopicArn: topicARN
      };

      sns.publish(snsFailParams, function(err, data) {
        if (err) {
          const response = {
            statusCode: 500,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify(err.stack)
          };
          callback(null, response);
        } else {
          const response = {
            statusCode: 200,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify(data)
          };
          callback(null, response);
        }
      });
    } else {
      let snsParams = {
        Message: `
        NEW CONTACT MESSAGE
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
        `,
        MessageStructure: 'string',
        TopicArn: topicARN
      };

      sns.publish(snsParams, function(err, data) {
        if (err) {
          const response = {
            statusCode: 500,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify(err.stack)
          };
          callback(null, response);
        } else {
          const response = {
            statusCode: 200,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify(data)
          };
          callback(null, response);
        }
      });
    }
  });
};
