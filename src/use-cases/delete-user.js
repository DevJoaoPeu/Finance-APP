import { PostgresDeleteUserRepository } from '../repositories/postgres/index.js'

export class DeleteUserUseCase {
    async execute(userId) {
        const postgresDelteUserRepository = new PostgresDeleteUserRepository()

        const deleteUser = postgresDelteUserRepository.execute(userId)

        return deleteUser
    }
}
