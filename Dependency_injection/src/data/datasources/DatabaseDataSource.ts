import {Database} from "../infrastructure/Database.js";
import {ResultSetConverter} from "../converters/ResultSetConverter.js";
import {User} from "../models/User.js";

export class DatabaseDataSource {
    private database: Database;
    private converter: ResultSetConverter;

    /**
     * @param database - Об'єкт управління базою даних.
     * @param converter - Конвертер для перетворення результатів SQL у моделі User.
     */
    constructor(database: Database, converter: ResultSetConverter) {
        this.database = database;
        this.converter = converter;
    }

    /**
     * Отримує всіх користувачів із бази даних.
     * Гарантує закриття з'єднання після виконання запиту.
     * * @returns Масив об'єктів User.
     */
    public selectAllUsers(): User[] {
        let users: User[] = [];

        const connection = this.database.open();

        try {
            console.log("DatabaseDataSource: Selecting all users from the database...");

            // Виконуємо запит (імітація)
            const rawData = connection.executeQuery("SELECT * FROM users");

            // Конвертуємо результат у список користувачів
            // Передаємо rawData (або тестовий рядок), щоб отримати дані
            users = this.converter.toUserList(rawData || "1;Ivan|2;Petro");

        } catch (error) {
            console.error("DatabaseDataSource: Error during selection", error);
        } finally {
            this.database.close(connection);
        }

        return users;
    }
}