import validator from 'validator'
import { badRequest, notFound } from './http.js'

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
        message: 'Id invalid. Please provide a valid one',
    })

export const userNotFoundResponse = () =>
    notFound({
        message: 'User not found',
    })

export const checkIfPasswordIsValid = (password) => password.length >= 6

export const checkIfEmailIsValid = (email) => validator.isEmail(email)

export const checkIfIdIsValid = (id) => validator.isUUID(id)
