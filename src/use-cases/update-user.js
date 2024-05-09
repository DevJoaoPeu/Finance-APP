import { PostgresGetUserByEmailRepository } from '../repositories/postgres/get-user-by-email.js'
import { EmailALreadyInUseError } from '../errors/user.js'
import { PostgresUpdateUserRepository } from '../repositories/postgres/update-user.js'
import bcrypt from 'bcrypt'

export class UpdateUserUseCase {
    async execute(userId, updateParams) {
        if (updateParams.email) {
            const postgresGetUserByEmailRepository =
                new PostgresGetUserByEmailRepository()

            const userWithProvidedEmail =
                postgresGetUserByEmailRepository.execute(updateParams.email)

            if (userWithProvidedEmail) {
                throw new EmailALreadyInUseError(updateParams.email)
            }
        }

        const user = { ...updateParams }

        if (updateParams.password) {
            const hashedPassword = await bcrypt.hash(
                createUserParams.password,
                10,
            )
            user.password = hashedPassword
        }

        const postgresUpdateUserRepository = new PostgresUpdateUserRepository()

        const updateUser = await postgresUpdateUserRepository.execute(
            userId,
            user,
        )

        return updateUser
    }
}
