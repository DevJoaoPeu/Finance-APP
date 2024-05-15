import { CreateUserUseCase } from '../use-cases/create-user.js'
import { EmailALreadyInUseError } from '../errors/user.js'
import {
    checkIfEmailIsValid,
    checkIfPasswordIsValid,
    emailIsAlreadyUserResponse,
    invalidPasswordResponse,
    badRequest,
    created,
    serverError,
} from './helpers/index.js'
export class CreateUserController {
    async execute(httpRequest) {
        try {
            const params = httpRequest.body

            const requiredFields = [
                'first_name',
                'last_name',
                'email',
                'password',
            ]

            for (const field of requiredFields) {
                if (!params[field] || params[field].trim().length === 0) {
                    return badRequest({ message: `Missing param: ${field}` })
                }
            }

            const passwordIsValid = checkIfPasswordIsValid(params.password)

            if (!passwordIsValid) {
                return invalidPasswordResponse()
            }

            const emailIsValid = checkIfEmailIsValid(params.email)

            if (!emailIsValid) {
                return emailIsAlreadyUserResponse()
            }

            const createUserUseCase = new CreateUserUseCase()

            const createdUser = await createUserUseCase.execute(params)

            return created(createdUser)
        } catch (error) {
            if (error instanceof EmailALreadyInUseError) {
                return badRequest({ message: error.message })
            }
            console.error(error)
            serverError()
        }
    }
}
