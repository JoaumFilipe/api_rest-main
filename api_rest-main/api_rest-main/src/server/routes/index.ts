import type { FastifyInstance } from 'fastify'

interface IQuerystring {
  teste: string
}

async function routes(fastify: FastifyInstance) {
  fastify.get('/', async (_, reply) => {
    return reply.code(200).send({ Apenas: 'testando!' })
  })

  fastify.post<{ Querystring: IQuerystring }>('/', async (request, reply) => {
    console.log(request.query.teste)
    return reply.code(201).send()
  })
}

export default routes
