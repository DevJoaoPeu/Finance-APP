import validator from 'validator'
import { badRequest, notFound } from './http.js'

export const checkIfIdIsValid = (id) => validator.isUUID(id)

export const invalidIdResponse = () =>
    badRequest({
        message: 'Id invalid. Please provide a valid one',
    })

export const requiredFieldsIsMissingResponse = (field) =>
    badRequest({
        message: `The field ${field} is required`,
    })

export const userNotFoundResponse = () =>
    notFound({
        message: 'User not found',
    })
