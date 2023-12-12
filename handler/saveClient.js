'use strict'

const AWS = require('aws-sdk')
const dynamoDB = new AWS.DynamoDB.DocumentClient()

async function isValidEmail(email) {
	// Expression régulière pour valider le format d'un e-mail
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return emailRegex.test(email)
}

async function getNextCustomerId() {
	const sequenceTableName = 'SequenceClientTable'
	const sequenceKeyName = 'sequenceClientId'

	const sequenceResult = await dynamoDB
		.get({
			TableName: sequenceTableName,
			Key: { [sequenceKeyName]: 'customerId' }
		})
		.promise()

	const nextCustomerId = (sequenceResult.Item ? sequenceResult.Item.value : 0) + 1

	await dynamoDB
		.put({
			TableName: sequenceTableName,
			Item: {
				[sequenceKeyName]: 'customerId',
				value: nextCustomerId
			}
		})
		.promise()

	return nextCustomerId
}

module.exports.handler = async (event) => {
	try {
		const requestBody = JSON.parse(event.body)

		const params = {
			tableName: 'CustomerTable',
			item: {
				email: requestBody.email,
				createdAt: Date.now()
			}
		}

		if (!(await isValidEmail(params.item.email))) {
			throw new Error("L'e-mail fourni n'est pas valide.")
		}

		// Vérifier si l'email existe déjà dans la table
		const existingClient = await dynamoDB
			.query({
				TableName: params.tableName,
				IndexName: 'emailIndex', // Assume que vous avez créé un index sur l'attribut 'email'
				KeyConditionExpression: 'email = :email',
				ExpressionAttributeValues: {
					':email': email
				}
			})
			.promise()

		if (existingClient.Items.length > 0) {
			throw new Error('Cet e-mail est déjà enregistré.')
		}

		const nextCustomerId = await getNextCustomerId()
		const customerId = `C${nextCustomerId}`

		await dynamoDB
			.put({
				TableName: params.tableName,
				Item: {
					customerId: customerId,
					email: params.item.email,
					createdAt: params.item.createdAt
				},
				ConditionExpression: 'attribute_not_exists(customerId)' // Assurez-vous que la clé primaire n'existe pas déjà
			})
			.promise()

		return {
			statusCode: 200,
			body: JSON.stringify({ message: 'Client sauvegardé avec succès' })
		}
	} catch (error) {
		console.error('Erreur:', error)
		return {
			statusCode: 500,
			body: JSON.stringify({ message: 'Erreur interne du serveur:' + error })
		}
	}
}
