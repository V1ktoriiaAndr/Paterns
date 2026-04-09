export class DatabaseConnection {
    /**
     * Імітує виконання SQL-запиту.
     * @param query - SQL рядок для виконання.
     * @returns Рядок-імітація результату виконання запиту.
     */
    public executeQuery(query: string): string {
        console.log(`Executing query: ${query}`);
        return `Result for: "${query}"`;
    }
}
