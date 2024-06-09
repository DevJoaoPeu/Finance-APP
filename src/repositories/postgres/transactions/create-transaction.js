import { prisma } from '../../../../prisma/PrismaClient/prisma.js'
export class PostgresCreateTransactionRepository {
    async execute(createTransactionParams) {
        return await prisma.transaction.create({
            data: createTransactionParams,
        })
    }
}
