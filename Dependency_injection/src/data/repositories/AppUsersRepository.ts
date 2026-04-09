import { UsersRepository } from "./UsersRepository.js";
import { FileDataSource } from "../datasources/FileDataSource.js";
import { DatabaseDataSource } from "../datasources/DatabaseDataSource.js";
import { NetworkDataSource } from "../datasources/NetworkDataSource.js";
import { User } from "../models/User.js";

export class AppUsersRepository implements UsersRepository {
    private fileDS: FileDataSource;
    private dbDS: DatabaseDataSource;
    private networkDS: NetworkDataSource;

    /**
     * @param fileDS - Джерело даних у файловій системі (найнижчий пріоритет).
     * @param dbDS - Джерело даних у базі даних (середній пріоритет).
     * @param networkDS - Джерело даних з мережі (найвищий пріоритет).
     */
    constructor(fileDS: FileDataSource, dbDS: DatabaseDataSource, networkDS: NetworkDataSource) {
        this.fileDS = fileDS;
        this.dbDS = dbDS;
        this.networkDS = networkDS;
    }

    /**
     * Отримує список всіх користувачів, перебираючи джерела за пріоритетом.
     * Примітка: Через синхронність інтерфейсу, асинхронні дані з мережі
     * у цій версії можуть бути недоступні без await.
     * * @returns Масив об'єктів User.
     */
    public allUsers(): User[] {
        console.log("AppUsersRepository: Fetching users with fallback logic...");

        let users: User[] = [];

        const networkUsers = (this.networkDS as any).getUsersSync?.();

        if (networkUsers && networkUsers.length > 0) {
            console.log("Loaded from Network");
            return networkUsers;
        }

        const dbUsers = this.dbDS.selectAllUsers();
        if (dbUsers && dbUsers.length > 0) {
            console.log("Loaded from Database");
            return dbUsers;
        }

        console.log("Loaded from File");
        const fileUsers = this.fileDS.convert("users.json");

        return fileUsers || [];
    }
}