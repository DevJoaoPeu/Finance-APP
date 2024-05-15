import { ok, serverError } from '../controller/helpers/http.js'
import {
    checkIfIdIsValid,
    invalidResponse,
} from '../controller/helpers/user.js'
import { DeleteUserUseCase } from '../use-cases/index.js'

export class DeleteUserController {
    async execute(httpRequest) {
        try {
            const userId = httpRequest.params.userId

            const idIsValid = checkIfIdIsValid(userId)

            if (!idIsValid) {
                return invalidResponse()
            }

            const deleteUserUseCase = new DeleteUserUseCase()

            const deleteUser = await deleteUserUseCase.execute(userId)

            return ok(deleteUser)
        } catch (error) {
            console.error(error)
            return serverError()
        }
    }
}
