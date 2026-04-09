import {DatabaseConnection} from "./DatabaseConnection.js";

export class Database {
    private connection: DatabaseConnection;

    /**
     * @param connection - Екземпляр з'єднання, що впорскується ззовні.
     */
    
    constructor(connection: DatabaseConnection) {
        this.connection = connection;
    }

    public open(): DatabaseConnection {
        console.log("Database connection opened");
        return this.connection;
    }

    public close(connection?: DatabaseConnection): void {
        console.log("Database connection closed");
    }
}