const { Client } = require('pg')

const client = new Client({
    user: 'dbuser',// const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'
    host: 'database.server.com',
    database: 'mydb',
    password: 'secretpassword',
    port: 3211,
})

client.connect()

module.exports = client
