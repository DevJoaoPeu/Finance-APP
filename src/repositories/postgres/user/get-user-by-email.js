import { prisma } from '../../../../prisma/PrismaClient/prisma.js'

export class PostgresGetUserByEmailRepository {
    async execute(email) {
        return await prisma.users.findFirst({ where: { email } })
    }
}
