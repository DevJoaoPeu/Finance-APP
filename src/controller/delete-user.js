import { ok, serverError } from '../controller/helpers/http.js'
import {
    checkIfIdIsValid,
    invalidResponse,
    userNotFoundResponse,
} from '../controller/helpers/user.js'

export class DeleteUserController {
    constructor(deleteUserUseCase) {
        this.deleteUserUseCase = deleteUserUseCase
    }

    async execute(httpRequest) {
        try {
            const userId = httpRequest.params.userId

            const idIsValid = checkIfIdIsValid(userId)

            if (!idIsValid) {
                return invalidResponse()
            }

            const deleteUser = await this.deleteUserUseCase.execute(userId)

            if (!deleteUser) {
                return userNotFoundResponse()
            }

            return ok(deleteUser)
        } catch (error) {
            console.error(error)
            return serverError()
        }
    }
}
