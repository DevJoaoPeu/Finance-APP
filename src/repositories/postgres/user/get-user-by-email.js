import { prisma } from '../../../../prisma/PrismaClient/prisma.js'
import { PostgresHelper } from '../../../db/postgres/helper.js'

export class PostgresGetUserByEmailRepository {
    async execute(email) {
        return await prisma.user.findUnique({ where: { email } })
    }
}
