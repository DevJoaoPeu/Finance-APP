import { PostgresHelper } from '../../../db/postgres/helper.js'

export class PostgresGetUserBalanceRepository {
    async execute(userId) {
        const balance = await PostgresHelper.query(
            `select
	            sum(case when type = 'EARNING' then amount else 0 end) as earnings,
	            sum(case when type = 'EXPENSE' then amount else 0 end) as expense,
	            sum(case when type = 'INVESTMENT' then amount else 0 end) as investment,
	            (
		            sum(case when type = 'EARNING' then amount else 0 end)
		            - sum(case when type = 'EXPENSE' then amount else 0 end)
		            - sum(case when type = 'INVESTMENT' then amount else 0 end)
	            ) as balance
            from transactions
            where user_id = $1;`,
            [userId]
        )

        return {
            userId,
            ...balance[0],
        }
    }
}
