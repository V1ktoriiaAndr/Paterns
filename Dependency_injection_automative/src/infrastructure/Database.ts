import {inject, injectable} from "tsyringe";
import {DB_CONNECTION_STRING_TOKEN} from "../di/tokens";

@injectable()
export class Database {
    constructor(@inject(DB_CONNECTION_STRING_TOKEN) private connectionString: string) {
    }

    async query(sql: string): Promise<any[]> {
        console.log(`[Database] Executing query: ${sql} on ${this.connectionString}`);
        return [{ id: 2, name: "Database User" }];
    }
}
