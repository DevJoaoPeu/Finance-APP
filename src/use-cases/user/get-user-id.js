export class GetUserByIdUseCase {
    constructor(getUserByIdRespository) {
        this.getUserByIdRespository = getUserByIdRespository
    }
    async execute(userId) {
        const user = await this.getUserByIdRespository.execute(userId)
        return user
    }
}
