import { PostgresGetUserByIdRepository } from '../repositories/postgres/get-user-id.js'

export class GetUserByIdUseCase {
    async execute(userId) {
        const getUserByIdRespository = new PostgresGetUserByIdRepository()
        const user = await getUserByIdRespository.execute(userId)

        return user
    }
}
