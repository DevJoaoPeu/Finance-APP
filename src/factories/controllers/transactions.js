import {
    PostgresCreateTransactionRepository,
    PostgresGetUserByIdRepository,
    PostgresGetTransactionByUserIdRepository,
    PostgresUpdateTransactionRepository,
} from '../../repositories/postgres/index.js'
import {
    CreateTransactionsUseCase,
    GetTransactionsByUserIdUseCase,
    UpdateTransactionUseCase,
} from '../../use-cases/index.js'
import {
    CreateTransactionController,
    GetTransactionsByUserIdController,
    UpdateTransactionController,
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

export const makeUpdateTransactionController = () => {
    const updateTransactionRepository =
        new PostgresUpdateTransactionRepository()

    const updateTransactionUseCase = new UpdateTransactionUseCase(
        updateTransactionRepository
    )

    const updateTransactionController = new UpdateTransactionController(
        updateTransactionUseCase
    )

    return updateTransactionController
}
