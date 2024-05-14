import validator from 'validator'
import { badRequest, ok, serverError } from './helpers/http.js'
import { UpdateUserUseCase } from '../use-cases/update-user.js'
import {
    checkIfEmailIsValid,
    checkIfPasswordIsValid,
    emailIsAlreadyUserResponse,
    invalidPasswordResponse,
    invalidResponse,
} from './helpers/user.js'

export class UpdateUserController {
    async execute(httpRequest) {
        try {
            const params = httpRequest.body

            const isIdValid = validator.isUUID(httpRequest.params.userId)

            if (!isIdValid) {
                return invalidResponse()
            }

            const userId = httpRequest.params.userId

            const allowedFields = [
                'first_name',
                'last_name',
                'email',
                'password',
            ]

            const someFieldIsNotAllowed = Object.keys(params).some(
                (field) => !allowedFields.includes(field),
            )

            if (someFieldIsNotAllowed) {
                return badRequest({
                    message: 'Some provided field is not allowed.',
                })
            }

            if (params.password) {
                const passwordIsValid = checkIfPasswordIsValid(params.password)

                if (!passwordIsValid) {
                    return invalidPasswordResponse()
                }
            }

            if (params.email) {
                const emailIsValid = checkIfEmailIsValid(updateUser.email)

                if (!emailIsValid) {
                    return emailIsAlreadyUserResponse()
                }
            }

            const updateUserUseCase = new UpdateUserUseCase()

            const updateUser = await updateUserUseCase.execute(userId, params)

            return ok(updateUser)
        } catch (error) {
            console.log(error)
            return serverError()
        }
    }
}
