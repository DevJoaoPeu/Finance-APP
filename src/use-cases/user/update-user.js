import { EmailAlreadyInUseError } from '../../errors/user.js'
import bcrypt from 'bcrypt'

export class UpdateUserUseCase {
    constructor(
        postgresUpdateUserRepository,
        postgresGetUserByEmailRepository
    ) {
        this.postgresUpdateUserRepository = postgresUpdateUserRepository
        this.postgresGetUserByEmailRepository = postgresGetUserByEmailRepository
    }

    async execute(userId, updateParams) {
        if (updateParams.email) {
            const userWithProvidedEmail =
                await this.postgresGetUserByEmailRepository.execute(
                    updateParams.email
                )

            if (userWithProvidedEmail && userWithProvidedEmail.id !== userId) {
                throw new EmailAlreadyInUseError(updateParams.email)
            }
        }

        const user = { ...updateParams }

        if (updateParams.password) {
            const hashedPassword = await bcrypt.hash(updateParams.password, 10)
            user.password = hashedPassword
        }

        const updateUser = await this.postgresUpdateUserRepository.execute(
            userId,
            user
        )

        return updateUser
    }
}
