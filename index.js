import 'dotenv/config.js'
import express from 'express'
import {
    makeCreateUserController,
    makeDeleteUserController,
    makeUpdateUserController,
    makeUserByIdController,
} from './src/factories/controllers/user.js'
import {
    makeCreateTransactionController,
    makeGetTransactionsByUserIdController,
    makeUpdateTransactionController,
} from './src/factories/controllers/transactions.js'

const app = express()

app.use(express.json())

app.post('/api/users', async (request, response) => {
    const createUserController = makeCreateUserController()

    const { statusCode, body } = await createUserController.execute(request)

    response.status(statusCode).send(body)
})

app.patch('/api/users/:userId', async (request, response) => {
    const updateUserController = makeUpdateUserController()
    const { statusCode, body } = await updateUserController.execute(request)

    response.status(statusCode).send(body)
})

app.get('/api/users/:userId', async (request, response) => {
    const getUserByIdController = makeUserByIdController()

    const { statusCode, body } = await getUserByIdController.execute(request)

    response.status(statusCode).send(body)
})

app.delete('/api/users/:userId', async (request, response) => {
    const deleteUsercontroller = makeDeleteUserController()
    const { statusCode, body } = await deleteUsercontroller.execute(request)

    response.status(statusCode).send(body)
})

app.post('/api/transactions', async (request, response) => {
    const createTransactionController = makeCreateTransactionController()

    const { statusCode, body } = await createTransactionController.execute(
        request
    )

    response.status(statusCode).send(body)
})

app.get('/api/transactions', async (request, response) => {
    const GetTransactionsByUserIdController =
        makeGetTransactionsByUserIdController()

    const { statusCode, body } =
        await GetTransactionsByUserIdController.execute(request)

    response.status(statusCode).send(body)
})

app.patch('/api/transactions/:transactionId', async (request, response) => {
    const updateTransactionController = makeUpdateTransactionController()

    const { statusCode, body } = await updateTransactionController.execute(
        request
    )

    response.status(statusCode).send(body)
})

app.listen(process.env.PORT, () =>
    console.log(`Listening on port ${process.env.PORT}`)
)
