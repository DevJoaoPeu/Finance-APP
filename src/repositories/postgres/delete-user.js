import { PostgresHelper } from '../../db/postgres/helper.js'

export class PostgresDeleteUser {
    async execute(userId) {
        const deleteUser = await PostgresHelper.query(
            'delete from users where id = $1 returning *',
            [userId],
        )

        return deleteUser[0]
    }
}
