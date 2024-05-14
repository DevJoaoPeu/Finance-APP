import { notFound, ok, serverError } from './helpers/http.js'
import { GetUserByIdUseCase } from '../use-cases/get-user-id.js'
import { checkIfIdIsValid, invalidResponse } from './helpers/user.js'

export class GetUserByIdController {
    async execute(httpRequest) {
        try {
            const isIdValid = checkIfIdIsValid(httpRequest.params.userId)

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
