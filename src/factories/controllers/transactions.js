import {
    PostgresCreateTransactionRepository,
    PostgresGetUserByIdRepository,
    PostgresGetTransactionByUserIdRepository,
} from '../../repositories/postgres/index.js'
import {
    CreateTransactionsUseCase,
    GetTransactionsByUserIdUseCase,
} from '../../use-cases/index.js'
import {
    CreateTransactionController,
    GetTransactionsByUserIdController,
} from '../../controller/index.js'

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

export const makeGetTransactionsByUserIdController = () => {
    const getTransactionByUserIdRepository =
        new PostgresGetTransactionByUserIdRepository()

    const getUserByIdRepository = new PostgresGetUserByIdRepository()

    const getTransactionsByUserIdUseCase = new GetTransactionsByUserIdUseCase(
        getTransactionByUserIdRepository,
        getUserByIdRepository
    )

    const getTransactionsByUserIdController =
        new GetTransactionsByUserIdController(getTransactionsByUserIdUseCase)

    return getTransactionsByUserIdController
}
