import { DynamoDB } from 'aws-sdk'
import { ErrorRequestHandler } from 'express'

const dynamoDB = new DynamoDB.DocumentClient()

function isValidEmail(email: string): boolean {
	// Expression régulière pour valider le format d'un e-mail
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return emailRegex.test(email)
}

const dynamoDBTableName = process.env['DynamoDBTableName']

export const saveEmail = async (req: any, res: any): Promise<any> => {
	try {
		if (!dynamoDBTableName) {
			throw new Error('Missing TableName property')
		}

		if (!req.body || !req.body.email) {
			throw new Error('Missing email property')
		}

		if (!isValidEmail(req.body.email)) {
			throw new Error('Please include a valid email address so we can get back to you.')
		}

		const params = {
			TableName: dynamoDBTableName,
			Item: {
				email: req.body.email,
				createdAt: Date.now()
			}
		}

		await dynamoDB
			.put({
				TableName: params.TableName || '',
				Item: {
					email: params.Item.email,
					createdAt: params.Item.createdAt
				},
				ConditionExpression: 'attribute_not_exists(email)'
			})
			.promise()
			.catch(() => {
				throw new Error(
					'The email address you are trying to add is already registered on our list.'
				)
			})

		res.status(200).json({
			message: `Thank you for your pre-registration! We are delighted to have you among our early
    subscribers. We will keep you updated on the progress and the official launch of the
    service. Stay tuned for the latest updates. Once again, welcome, and thank you for
    being part of our community!`
		})
	} catch (error: any) {
		console.log('Erreur:', error.message)
		res.status(400).json({ message: error.message })
	}
}
