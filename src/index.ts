import express from 'express'
import { createServer } from 'http'
import compression from 'compression'

const api = express()
const server = createServer(api)

api.use(compression())

const getEnv = (name: string): string => {
  const value = (process.env[name] ?? '').trim()
  if (value === '') throw new Error(`missing env: ${name}`)
  return value
}

api.get('*', (_, res) => {
  console.log('the example deployment has been called!', new Date())
  res.end('hello! it works!')
})

const port = getEnv('PORT')
server.listen(port, () => console.log(`Listening on ${port}.`))
