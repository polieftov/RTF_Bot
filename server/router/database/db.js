const { Client } = require('pg')

const connectionString = 'postgres://aaxlksti:sXmzkUkgfKJn2Nq2wyPlPknq5hd0Vhhq@abul.db.elephantsql.com/aaxlksti'

const client = new Client(connectionString)
//{
    // user: 'postgres',
    // host: 'localhost',
    // database: 'alice_bot_rtf',
    // password: 'root',
    // port: 5432
// })

client.connect()

module.exports = client
