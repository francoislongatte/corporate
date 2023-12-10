'use strict';

const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.saveClient = async (event) => {
  try {
    const requestBody = JSON.parse(event.body);

    const params = {
      TableName: 'ClientTable',
      Item: {
        customerId: requestBody.customerId,
        email: requestBody.email,
        createdAt: Date.now()
      }
    };

    await dynamoDB.put(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Client sauvegardé avec succès' })
    };
  } catch (error) {
    console.error('Erreur:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Erreur interne du serveur' })
    };
  }
};