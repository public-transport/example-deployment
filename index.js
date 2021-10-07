'use strict'

import express from 'express'
import { createServer } from 'http'
import compression from 'compression'

const api = express()
const server = createServer(api)

api.use(compression())

const getEnv = name => {
	const value = (process.env[name] || '').trim()
	if (!value) throw new Error(`missing env: ${name}`)
	return value
}

api.get('*', async (req, res, next) => {
	console.log('the example deployment has been called!', new Date())
	res.end('hello! it works! even twice!')
})

const port = getEnv('PORT')
server.listen(port, error => {
	if (error) {
		console.error(error)
		process.exit(1)
	}
	console.log(`Listening on ${port}.`)
})
