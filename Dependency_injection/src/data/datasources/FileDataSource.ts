import {FileSystemAccess} from "../infrastructure/FileSystemAccess.js";
import {JsonConverter} from "../converters/JsonConverter.js";
import {User} from "../models/User.js";

export class FileDataSource {
    private fileSystemAccess: FileSystemAccess;
    private jsonConverter: JsonConverter;

    /**
     * @param fileSystemAccess - Об'єкт для низькорівневого читання файлів.
     * @param jsonConverter - Конвертер для перетворення вмісту файлу в об'єкти.
     */
    constructor(fileSystemAccess: FileSystemAccess, jsonConverter: JsonConverter) {
        this.fileSystemAccess = fileSystemAccess;
        this.jsonConverter = jsonConverter;
    }

    /**
     * Просто читає вміст файлу як сирий рядок.
     * @param path - Шлях до файлу.
     * @returns Вміст файлу у вигляді рядка.
     */
    public read(path: string): string {
        return this.fileSystemAccess.readFile(path);
    }

    /**
     * Читає файл за вказаним шляхом і конвертує його вміст у масив користувачів.
     * @param path - Шлях до JSON-файлу.
     * @returns Масив об'єктів User.
     */
    public convert(path: string): User[] {
        console.log(`FileDataSource: Reading and converting file from ${path}...`);

        const rawData = this.read(path);

        if (!rawData) return [];

        return this.jsonConverter.parseUsers(rawData);
    }
}