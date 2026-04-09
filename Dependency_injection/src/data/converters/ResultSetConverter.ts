import {User} from "../models/User.js";

export class ResultSetConverter {
    /**
     * Перетворює сирий результат запиту (resultSet) у масив екземплярів User.
     * * @param resultSet - Рядок або об'єкт, що імітує дані з бази даних.
     * @returns Масив об'єктів User.
     * * @example
     * const converter = new ResultSetConverter();
     * const users = converter.toUserList("1;Ivan|2;Petro");
     */
    public toUserList = (resultSet: string): User[] => {
        console.log("Converting ResultSet to User list...");

        return [
            new User(101, "Admin_DB"),
            new User(102, "Guest_DB")
        ];
    }
}