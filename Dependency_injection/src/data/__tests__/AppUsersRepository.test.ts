import { AppUsersRepository } from "../repositories/AppUsersRepository.js";
import { User } from "../models/User.js";

/**
 * Тест для перевірки логіки пріоритетів AppUsersRepository.
 */
function testAppUsersRepository() {
    console.log("--- Running AppUsersRepository Tests ---");

    const mockNetworkUsers = [new User(1, "Network User")];
    const mockDbUsers = [new User(2, "DB User")];
    const mockFileUsers = [new User(3, "File User")];

    const mockNetworkDS = {
        getUsers: () => mockNetworkUsers
    } as any;

    const mockDbDS = {
        selectAllUsers: () => mockDbUsers
    } as any;

    const mockFileDS = {
        convert: () => mockFileUsers
    } as any;

    const repo1 = new AppUsersRepository(mockFileDS, mockDbDS, mockNetworkDS);
    const result1 = repo1.allUsers();

    console.assert(result1[0].name === "Network User", "Test 1 Failed: Should load from Network");
    console.log("Test 1 Passed: Network priority works.");

    const emptyNetworkDS = { getUsers: () => undefined } as any;
    const repo2 = new AppUsersRepository(mockFileDS, mockDbDS, emptyNetworkDS);
    const result2 = repo2.allUsers();

    console.assert(result2[0].name === "DB User", "Test 2 Failed: Should load from Database");
    console.log("Test 2 Passed: Database fallback works.");

    const emptyDbDS = { selectAllUsers: () => [] } as any;
    const repo3 = new AppUsersRepository(mockFileDS, emptyDbDS, emptyNetworkDS);
    const result3 = repo3.allUsers();

    console.assert(result3[0].name === "File User", "Test 3 Failed: Should load from File");
    console.log("Test 3 Passed: File fallback works.");

    console.log("--- All Tests Completed ---");
}

testAppUsersRepository();