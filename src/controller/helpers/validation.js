import validator from 'validator'
import { badRequest } from './http.js'

export const checkIfIdIsValid = (id) => validator.isUUID(id)

export const invalidIdResponse = () =>
    badRequest({
        message: 'Id invalid. Please provide a valid one',
    })

export const checkIfIsString = (value) => typeof value === 'string'

export const validationRequiredFields = (params, requiredFields) => {
    for (const field of requiredFields) {
        const fieldIsMissing = !params[field]
        const fieldIsEmpty =
            checkIfIsString(params[field]) &&
            validator.isEmpty(params[field], {
                ignore_whitespace: true,
            })

        if (fieldIsMissing || fieldIsEmpty) {
            return {
                ok: false,
                missingField: field,
            }
        }
    }

    return {
        ok: true,
        missingField: undefined,
    }
}
