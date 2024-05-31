import { UserNotFoundError } from '../../errors/user.js'

export class GetTransactionsByUserId {
    constructor(getTransactionByUserIdRepository, getUserByIdRepository) {
        this.getTransactionByUserIdRepository = getTransactionByUserIdRepository
        this.getUserByIdRepository = getUserByIdRepository
    }

    async execute(params) {
        const user = await this.getUserByIdRepository.execute(params.userId)

        if (!user) {
            throw new UserNotFoundError(params.userId)
        }

        const transactions =
            await this.getTransactionByUserIdRepository.execute(params.userId)

        return transactions
    }
}
