export interface IUsersRepository {
    allUsers(): string[];
}

// Token for interface injection (needed for tsyringe)
export const IUsersRepositoryToken = Symbol('IUsersRepository');