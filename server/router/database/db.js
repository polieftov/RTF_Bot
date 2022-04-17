const { Client } = require('pg')

const client = new Client({
    user: 'postgres',// const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'
    host: 'localhost',
    database: 'alice_bot_rtf',
    password: 'root',
    port: 5432
})

client.connect()

module.exports = client
