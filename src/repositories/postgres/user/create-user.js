import { prisma } from '../../../../prisma/PrismaClient/prisma.js'

export class PostgresCreateUserRepository {
    async execute(createUserParams) {
        return await prisma.user.create({
            data: {
                first_name: createUserParams.first_name,
                last_name: createUserParams.last_name,
                email: createUserParams.email,
                password: createUserParams.password,
            },
        })
    }
}
