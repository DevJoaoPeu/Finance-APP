import { prisma } from '../../../../prisma/PrismaClient/prisma.js'
export class PostgresGetTransactionByUserIdRepository {
    async execute(userId) {
        return await prisma.transaction.findMany({ where: { user_id: userId } })
    }
}
