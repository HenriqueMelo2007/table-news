import Fastify from 'fastify'
const server = Fastify()

server.get('/', function (request, reply) {
  console.log('olá mundo')
  reply.send({ message: 'olá' })
})

server.listen({ port: 3000 })