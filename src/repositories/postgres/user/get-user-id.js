import { prisma } from '../../../../prisma/PrismaClient/prisma.js'
export class PostgresGetUserByIdRepository {
    async execute(userId) {
        return await prisma.user.findUnique({ where: { id: userId } })
    }
}
