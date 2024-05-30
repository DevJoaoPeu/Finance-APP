import { UserNotFoundError } from "../../errors/user.js"
import { v4 as uuidv4 } from 'uuid'

export class CreateTransactionsUseCase {
    constructor(createTransactionRepository, getUserByIdRepository) {
        this.createTransactionRepository = createTransactionRepository
        this.getUserByIdRepository = getUserByIdRepository
    }

    async execute(createTransactionParams) {
        const userId = createTransactionParams.userId

        const user = await this.getUserByIdRepository.execute(userId)

        if (!user) {
            throw new UserNotFoundError(userId)
        }

        const transactionId = uuidv4()

        const transaction = this.createTransactionRepository({
            ...createTransactionParams,
            id: transactionId
        })

        return transaction
    }
}

// 078 