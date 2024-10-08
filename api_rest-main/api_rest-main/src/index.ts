import server from './server/server.js'
import { env } from './env.js'

server.listen({ port: env.PORT || 3333, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log(`Server listening at ${address}`)
})
