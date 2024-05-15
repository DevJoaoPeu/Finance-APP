import {
    PostgresGetUserByEmailRepository,
    PostgresUpdateUserRepository,
} from '../repositories/postgres/index.js'
import { EmailALreadyInUseError } from '../errors/user.js'
import bcrypt from 'bcrypt'

export class UpdateUserUseCase {
    async execute(userId, updateParams) {
        if (updateParams.email) {
            const postgresGetUserByEmailRepository =
                new PostgresGetUserByEmailRepository()

            const userWithProvidedEmail =
                await postgresGetUserByEmailRepository.execute(
                    updateParams.email,
                )

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
