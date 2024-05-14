import validator from 'validator'
import { notFound, ok, serverError } from './helpers/http.js'
import { GetUserByIdUseCase } from '../use-cases/get-user-id.js'
import { invalidResponse } from './helpers/user.js'

export class GetUserByIdController {
    async execute(httpRequest) {
        try {
            const isIdValid = validator.isUUID(httpRequest.params.userId)

            if (!isIdValid) {
                return invalidResponse()
            }

            const getUserByIdUseCase = new GetUserByIdUseCase()

            const user = await getUserByIdUseCase.execute(
                httpRequest.params.userId,
            )

            if (!user) {
                return notFound({ message: 'User Not Found' })
            }

            return ok(user)
        } catch (error) {
            console.log(error)
            return serverError()
        }
    }
}
