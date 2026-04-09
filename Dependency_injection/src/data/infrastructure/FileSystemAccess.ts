export class FileSystemAccess {
    /**
     * Читає вміст файлу за вказаним шляхом.
     * * @param path - Шлях до файлу, який потрібно прочитати.
     * @returns Рядок-імітація вмісту файлу.
     * * @example
     * const fs = new FileSystemAccess();
     * const content = fs.readFile("config.json");
     * // "Content of the file at config.json"
     */
    public readFile = (path: string): string => {
        console.log(`Reading file: ${path}`);
        return `Content of the file at ${path}`;
    };
}