import { serverError, created, badRequest } from '../helpers/index.js'
import { createTransactionSchema } from '../../schemas/index.js'
import { ZodError } from 'zod'

export class CreateTransactionController {
    constructor(createTrasactionUseCase) {
        this.createTrasactionUseCase = createTrasactionUseCase
    }
    async execute(httpRequest) {
        try {
            const params = httpRequest.body

            await createTransactionSchema.parseAsync(params)

            const transaction = await this.createTrasactionUseCase.execute(
                params
            )

            return created(transaction)
        } catch (error) {
            if (error instanceof ZodError) {
                return badRequest({
                    message: error.errors[0].message,
                })
            }
            console.error(error)
            return serverError()
        }
    }
}
