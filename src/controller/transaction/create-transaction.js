import {
    badRequest,
    checkIfIdIsValid,
    serverError,
    invalidResponse,
    created,
} from '../helpers/index.js'
import validator from 'validator'

export class CreateTransactionController {
    constructor(createTrasactionUseCase) {
        this.createTrasactionUseCase = createTrasactionUseCase
    }
    async execute(httpRequest) {
        try {
            const params = httpRequest.body

            const requiredFields = ['user_id', 'name', 'date', 'amount', 'type']

            for (const field of requiredFields) {
                if (
                    !params[field] ||
                    params[field].toString().trim().length === 0
                ) {
                    return badRequest({ message: `Missing param: ${field}` })
                }
            }

            const userIdIsValid = checkIfIdIsValid(params.user_id)

            if (!userIdIsValid) {
                return invalidResponse()
            }

            if (params.amount < 0) {
                return badRequest({
                    message: 'The amount must be greater than 0',
                })
            }

            const amountIsValid = validator.isCurrency(
                params.amount.toString(),
                {
                    digits_after_decimal: [2],
                    allow_negatives: false,
                    decimal_separator: '.',
                }
            )

            if (!amountIsValid) {
                return badRequest({
                    message: 'The amount must be a valid currency',
                })
            }

            const type = params.type.trim().toUpperCase()

            const typeIsValid = ['EARNING', 'EXPENSE', 'INVESTMENT'].includes(
                type
            )

            if (!typeIsValid) {
                return badRequest({
                    message: 'The type mus be EARNING, EXPENSE or INVESTMENT',
                })
            }

            const transaction = await this.createTrasactionUseCase.execute({
                ...params,
                type,
            })

            return created(transaction)
        } catch (error) {
            console.error(error)
            return serverError()
        }
    }
}
