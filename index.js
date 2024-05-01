import 'dotenv/config.js'
import express from 'express'

import { PostgresHelper } from './src/postgres/helper.js'

const app = express()

app.get('/', async (req, res) => {
    try {
        const results = await PostgresHelper.query('SELECT * FROM users;')
        res.send(JSON.stringify(results))
    } catch (error) {
        console.error('Error:', error.message)
        res.status(500).send('Internal Server Error')
    }
})

app.listen(3000, () => console.log('Port running 3000'))
