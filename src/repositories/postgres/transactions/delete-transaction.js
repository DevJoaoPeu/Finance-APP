import { prisma } from '../../../../prisma/PrismaClient/prisma.js'

export class PostgresDeleteTransactionRepository {
    async execute(transactionId) {
        try {
            return await prisma.transaction.delete({
                where: { id: transactionId },
            })
        } catch (error) {
            return null
        }
    }
}
