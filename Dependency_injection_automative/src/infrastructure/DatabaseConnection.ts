import {inject, injectable} from "tsyringe";
import {DB_CONNECTION_STRING_TOKEN} from "../di/tokens";

@injectable()
export class DatabaseConnection {
    constructor(@inject(DB_CONNECTION_STRING_TOKEN) private connectionString: string) {
    }

    connect(): void {
        console.log(`[DatabaseConnection] Connected to ${this.connectionString}`);
    }

    disconnect(): void {
        console.log(`[DatabaseConnection] Disconnected`);
    }
}
