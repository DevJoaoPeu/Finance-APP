import { prisma } from '../../../../prisma/PrismaClient/prisma.js'
export class PostgresDeleteUserRepository {
    async execute(userId) {
        try {
            return await prisma.user.delete({ where: { id: userId } })
        } catch (error) {
            return null
        }
    }
}
