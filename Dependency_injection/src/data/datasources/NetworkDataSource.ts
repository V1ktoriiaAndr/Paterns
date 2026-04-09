import {JsonConverter} from "../converters/JsonConverter.js";
import {HttpClient} from "../infrastructure/HttpClient.js";
import {User} from "../models/User.js";

export class NetworkDataSource {
    private jsonConverter: JsonConverter;
    private httpClient: HttpClient;

    /**
     * @param jsonConverter - Конвертер для перетворення JSON в об'єкти User.
     * @param httpClient - Клієнт для виконання мережевих запитів.
     */

    constructor(jsonConverter: JsonConverter, httpClient: HttpClient) {
        this.jsonConverter = jsonConverter;
        this.httpClient = httpClient;
    }

    /**
     * Отримує список користувачів із зовнішнього API.
     * @returns Promise із масивом об'єктів User.
     */

    public getUsers = async (): Promise<User[]> => {
        try {
            const httpResponse = await this.httpClient.get("https://jsonplaceholder.typicode.com/users");

            if (!httpResponse) {
                console.warn("NetworkDataSource: Received empty response.");
                return [];
            }

            return this.jsonConverter.parseUsers(httpResponse as string);

        } catch (error) {
            console.error("NetworkDataSource: Error fetching users:", error);
            return [];
        }
    }
}