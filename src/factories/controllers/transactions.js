import {
    PostgresCreateTransactionRepository,
    PostgresGetUserByIdRepository,
} from '../../repositories/postgres/index.js'
import { CreateTransactionsUseCase } from '../../use-cases/index.js'
import { CreateTransactionController } from '../../controller/index.js'

export const makeCreateTransactionController = () => {
    const createTransactionRepository =
        new PostgresCreateTransactionRepository()
    const getUserByIdRepository = new PostgresGetUserByIdRepository()

    const createTransactionUseCase = new CreateTransactionsUseCase(
        createTransactionRepository,
        getUserByIdRepository
    )

    const createTransactionController = new CreateTransactionController(
        createTransactionUseCase
    )

    return createTransactionController
}
