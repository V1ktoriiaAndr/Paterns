import {JsonConverter} from "../data/converters/JsonConverter.js";
import {ResultSetConverter} from "../data/converters/ResultSetConverter.js";

import {DatabaseDataSource} from "../data/datasources/DatabaseDataSource.js";
import {FileDataSource} from "../data/datasources/FileDataSource.js";
import {NetworkDataSource} from "../data/datasources/NetworkDataSource.js";

import {Database} from "../data/infrastructure/Database.js";
import {DatabaseConnection} from "../data/infrastructure/DatabaseConnection.js";
import {FileSystemAccess} from "../data/infrastructure/FileSystemAccess.js";
import {HttpClient} from "../data/infrastructure/HttpClient.js";

import {AppUsersRepository} from "../data/repositories/AppUsersRepository.js";

/**
 * Функція bootstrap ініціалізує всю систему (DI-контейнер вручну).
 * @param baseUrl - Базова адреса для API.
 */
export function bootstrap(baseUrl: string) {
    const jsonConverter = new JsonConverter();
    const resultSetConverter = new ResultSetConverter();

    const databaseDataSource = new DatabaseDataSource(new Database(new DatabaseConnection()), resultSetConverter);
    const fileDataSource = new FileDataSource(new FileSystemAccess(), jsonConverter);
    const networkDataSource = new NetworkDataSource(jsonConverter, new HttpClient(baseUrl));

    const appUsersRepository = new AppUsersRepository(fileDataSource, databaseDataSource, networkDataSource);

    return appUsersRepository;
}

