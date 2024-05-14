import validator from 'validator'
import { badRequest } from './http.js'

export const invalidPasswordResponse = () =>
    badRequest({
        message: 'Password must be at least 6 characters',
    })

export const emailIsAlreadyUserResponse = () =>
    badRequest({
        message: 'Invalid email. Please provide a valid one',
    })

export const invalidResponse = () =>
    badRequest({
        message: 'Invalid email. Please provide a valid one',
    })

export const checkIfPasswordIsValid = (password) => password.legth >= 6

export const checkIfEmailIsValid = (email) => validator.email(email)

export const checkIfIdIsValid = (id) => validator.isUUID(id)
