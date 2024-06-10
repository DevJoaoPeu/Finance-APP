import { prisma } from '../../../../prisma/PrismaClient/prisma.js'

export class PostgresUpdateTransactionRepository {
    async execute(transactionId, updateTransactionParams) {
        return await prisma.transaction.update({
            where: {
                id: transactionId,
            },
            data: updateTransactionParams,
        })
    }
}
