import {User} from "../models/User.js";

export interface UsersRepository {
    /**
     * Отримує повний список користувачів.
     * @returns Масив об'єктів User.
     */
    allUsers(): User[];
}

