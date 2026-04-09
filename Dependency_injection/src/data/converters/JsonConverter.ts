import {User} from "../models/User.js";

export class JsonConverter {
     /**
     * Перетворює рядок відповіді від сервера у масив екземплярів класу User.
     * * @param httpResponse - JSON-рядок, отриманий від API.
     * @returns Масив об'єктів User з тестовими даними.
     * * @example
     * const converter = new JsonConverter();
     * const users = converter.parseUsers('[{"id": 1, "name": "John"}]');
     */
    public parseUsers = (httpResponse: string): User[] => {
        console.log("Parsing HTTP response to User objects...");

        return [
            new User(1, "Олександр"),
            new User(2, "Марія"),
            new User(3, "Дмитро")
        ];
    }
}
