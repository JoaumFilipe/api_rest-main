import fastify from 'fastify'
import routes from './routes/index.js'

const server = fastify()

// Rotas do server
server.register(routes)

export default server
